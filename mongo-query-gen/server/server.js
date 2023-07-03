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

        // Used LangChain to make a structured response no matter the user input
        const response = await prompt.formatPromptValue({
            db: dbType,
            promptReq: promptRequest
        });
        const responseStr = response.toString();
        
        // Call out to the OpenAI API service for Chat Completion
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{
                "role": "system",
                "content": responseStr
            }]
        });

        // Send the response back as the output
        res.send(completion.data.choices[0].message.content)
    
    } catch (error) {
        console.error("OpenAI API failed to generate a reponse", error)
    }
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