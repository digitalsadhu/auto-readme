import React from 'react';
import { resolve } from 'path';
import { readFileSync } from 'fs';
import ReactMarkdown from 'react-markdown';

export default function Markdown(props) {
    const filePath = resolve(process.cwd(), props.file);
    const contents = readFileSync(filePath, 'utf8');

    return (
        <div>
            <ReactMarkdown source={contents} />
            <br />
            <br />
        </div>
    );
}
