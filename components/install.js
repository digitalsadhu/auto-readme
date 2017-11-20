import React from 'react';
import { resolve } from 'path';
import PropTypes from 'prop-types';

export default function Title(props) {
    const { name } = require(resolve(process.cwd(), 'package.json'));
    let { title, yarn, npm } = props;

    if (!title) {
        title = 'Install';
    }

    if (yarn) {
        yarn = (
            <div>
                <h3>yarn</h3>
                <pre>
                    <code className="language-bash">yarn add {name}</code>
                </pre>
            </div>
        );
    }

    if (npm || !yarn) {
        npm = (
            <div>
                <h3>npm</h3>
                <pre>
                    <code className="language-bash">npm install {name}</code>
                </pre>
            </div>
        );
    }

    return (
        <div>
            <h2>{title}</h2>
            {npm}
            {yarn}
        </div>
    );
}

Title.propTypes = {
    title: PropTypes.string,
    yarn: PropTypes.bool,
    npm: PropTypes.bool,
};
