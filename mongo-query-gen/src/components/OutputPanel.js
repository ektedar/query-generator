import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const customDoccoTheme = {
    ...docco,
    'hljs': {
        ...docco.hljs,
        'color': '#ffffff',
        'background': '#00000003',
    },
};


const OutputPanel = ({ output, queryType }) => {
    const language = queryType === 'mongo' ? 'json' : 'sql';
    return (
        <div className="right-panel">
            <h2>Generated Query</h2>
            <pre>
                <div className="title-bar">
                    <span className="close"></span>
                    <span className="minimize"></span>
                    <span className="fullscreen"></span>
                </div>
                <SyntaxHighlighter language={language} style={customDoccoTheme}>
                    {output}
                </SyntaxHighlighter>
            </pre>
        </div>
    );
};

export default OutputPanel