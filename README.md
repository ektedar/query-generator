# Query Generator

This repo will be able to generate queries from simple english.  Powered by ChatGPT api and LangChain support. Behind the scene, LangChain is used to normalize the user input to a standardized template.  That template is then passed along to OpenAI API model for `ChatCompletion`.  As of July 3rd, 2023, that is the available API endpoint being used for this project. 

## Example

This is an example usage.  The backend will be reaching out to the ChatGPT API to generate the responses. Users have the option of chosing between Mongo and Vanilla SQL.

![image_example](images/Example.PNG)

## How to run

In order to run the UI you will need to run `npm start` inside the `query-generator` folder. This is will run the UI. Consequently, you will also need to spin up the server. 

Before spinning up the server however, you will need to create an environment variable with your API key. The environment variable needs to be called `OPENAI_API_KEY`. 

#### Mac/Linux
```bash
source ../../.env
node server.js
```

#### Windows
```cmd
set ../../env.bat
node server.js
```

This will spin up the server that the UI will be communicating with for the responses. Once the server and the UI have been established, you will be able to use the UI to generate your query responses using ChatGPT. 

**NOTE**: _The API is only using `gpt-3.5-turbo` model since this was an experimental project_