import React from 'react';

const InputPanel = ({ input, handleInputChange, generateQuery, handleQueryType, queryType }) => {
    return (
        <div className="left-panel">
            <h2>Input</h2>
            <textarea value={input} onChange={handleInputChange} rows="20" cols="50"></textarea>
            <div className="action-bar">
                <button onClick={generateQuery}>Generate Query</button>
                <select value={queryType} onChange={handleQueryType}>
                    <option value="mongo">Mongo</option>
                    <option value="sql">SQL</option>
                </select>
            </div>
        </div>
    );
};

export default InputPanel
