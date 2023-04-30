import React, { useState } from 'react';
import InputPanel from './components/InputPanel';
import OutputPanel from './components/OutputPanel';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  // Lol what is this doing
  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  // TODO: Update this with the API call but for now we can keep it a static output
  const generateMongoQuery = async () => {
    const apiResponse = 'Generated Mongo Query: ' + input;
    setOutput(apiResponse)
  };

  return (
    <div className="App">
      <div className="container">
        <InputPanel
          input={input}
          handleInputChange={handleInputChange}
          generateMongoQuery={generateMongoQuery}
        />
        <OutputPanel
          output={output}
        />
      </div>
    </div>
  );
}

export default App;
