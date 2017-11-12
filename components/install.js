import React from 'react';
import { resolve } from 'path';
import ReactMarkdown from 'react-markdown';

export default function Title(props) {
    let { name } = require(resolve(process.cwd(), 'package.json'));

    return (
        <div>
            <h2>Install</h2>
            <code data-type="bash">npm install {name}</code>
            <br />
            <br />
        </div>
    );
}
