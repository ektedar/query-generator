const express = require('express');
const { Configuration, OpenAIApi } = require("openai");
const cors = require('cors');
require('dotenv').config();

// Cors settings
const app = express();
app.use(cors());
app.use(express.json());

// Set the API Key from the environment variable
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

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
