const express = require('express');
const { Configuration, OpenAIApi } = require("openai");
const { ChatPromptTemplate, HumanMessagePromptTemplate, PromptTemplate, SystemMessagePromptTempplate } = require('langchain/prompts')
const cors = require('cors');
require('dotenv').config();

// Cors settings
const app = express();
app.use(cors());
app.use(express.json());

// Set the API Key from the environment variable
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration);

app.post('/generateQuery', async (req, res) => {
    // Get the user requests from the post call
    promptRequest = req.body.usrPrompt
    dbType = req.body.db

    const template = "Write me a {db} query with the following objective: {promptReq}. Code only.";
    const prompt = new PromptTemplate({
        template,
        inputVariables: ["db", "promptReq"]
    });

    try {
        const response = await prompt.formatPromptValue({
            db: dbType,
            promptReq: promptRequest
        });
    } catch (error) {
        console.error("LangChain server failed to respond:", error)
    }

    const responseStr = response.toString();

    console.log(responseStr)
    res.send(responseStr)

})


app.post('/mongoQuery', async (req, res) => {
    // Extract the data from the request body
    const { data } = req.body;

    // Call the OpenAI API or whatever processing you need
    // For example, if you're using GPT-3
    const gptResponse = await openai.createCompletion({
        model: "gpt-4",
        messages: [
            {
                role: "user",
                content: "Create a Mongo request to " + req.body.message
            }
        ]
    });
    res.send(gptResponse.data.choices[0].message)
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

// To hanlde Ctrl+C Command to exit the server
process.on('SIGINT', function () {
    console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
    // some other closing procedures go here
    process.exit(0);
});