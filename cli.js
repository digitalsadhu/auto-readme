'use strict';

require('babel-core/register')({
    presets: ['react'],
    plugins: ['babel-plugin-transform-es2015-modules-commonjs'],
});
const { resolve } = require('path');
const { writeFileSync } = require('fs');
const toMarkdown = require('to-markdown');
const { createElement } = require('react');
const { renderToString } = require('react-dom/server');

const { default: Readme } = require('./readme');

const contents = renderToString(createElement(Readme));
const md = toMarkdown(contents.replace(/<!-- -->/gm, ''), {
    converters: [
        {
            filter: ['section', 'div'],
            replacement: content => content,
        },
    ],
});
writeFileSync(resolve(__dirname, 'README.md'), md);
