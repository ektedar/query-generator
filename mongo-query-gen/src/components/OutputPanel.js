import React from 'react';

const OutputPanel = ({output}) => {
    return (
        <div className="right-panel">
            <h2>Output</h2>
            <pre>{output}</pre>
        </div>
    );
};

export default OutputPanel
