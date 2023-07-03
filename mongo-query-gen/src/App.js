import React, { useState } from 'react';
import './App.css';
import InputPanel from './components/InputPanel';
import OutputPanel from './components/OutputPanel';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [queryType, setQueryType] = useState('mongo');


  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  const handleQueryTypeChange = (event) => {
    setQueryType(event.target.value);
  }

  // TODO: Update this with the API call but for now we can keep it a static output
  const generateQuery = async () => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: "create a table" // Hardcoded for testing
        })
      }

      // Sending a POST request
      const response = fetch("http://localhost:3001/mongoQuery", options)
      const data = (await response).json()
      console.log(data)

    } catch (error) {
      console.error('Error generating response:', error);
    }
  };


  return (
    <div className="App">
      <div className="container">
        <InputPanel
          input={input}
          handleInputChange={handleInputChange}
          generateQuery={generateQuery}
          handleQueryType={handleQueryTypeChange}
          queryType={queryType}
        />
        <OutputPanel
          output={output}
        />
      </div>
    </div>
  );
}

export default App;
