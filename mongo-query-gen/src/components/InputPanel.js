import React from 'react';

const InputPanel = ({input, handleInputChange, generateMongoQuery}) => {
    return (
        <div className="left-panel">
            <h2>Input</h2>
            <textarea value={input} onChange={handleInputChange} rows="20" cols="50"></textarea>
            <button onClick={generateMongoQuery}>Geneerate Mongo Query</button>
        </div>
    );
};

export default InputPanel
