import React from 'react';

const OutputPanel = ({ output }) => {
    return (
        <div className="right-panel">
            <h2>Generated Query</h2>
            <pre>
                <div className="title-bar">
                    <span className="close"></span>
                    <span className="minimize"></span>
                    <span className="fullscreen"></span>
                </div>
                {output}
            </pre>
        </div>
    );
};

export default OutputPanel