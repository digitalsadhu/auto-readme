import React from 'react';
import { resolve } from 'path';
import ReactMarkdown from 'react-markdown';

export default function Title(props) {
    let { name } = require(resolve(process.cwd(), 'package.json'));
    let { title, yarn, npm } = props;

    if (!title) {
        title = 'Install';
    }

    if (yarn) {
        yarn = (
            <div>
                <h3>yarn</h3>
                <code data-type="bash">yarn add {name}</code>
            </div>
        );
    }

    if (npm) {
        npm = (
            <div>
                <h3>npm</h3>
                <code data-type="bash">npm install {name}</code>
            </div>
        );
    }

    if (!npm && !yarn) {
        npm = (
            <div>
                <h3>npm</h3>
                <code data-type="bash">npm install {name}</code>
            </div>
        );
    }

    return (
        <div>
            <h2>{title}</h2>
            {npm}
            {yarn}
            <br />
            <br />
        </div>
    );
}
