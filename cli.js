#!/usr/bin/env node

const meow = require('meow');
const ora = require('ora');

require('babel-core/register')({
    presets: ['react'],
    plugins: ['babel-plugin-transform-es2015-modules-commonjs'],
});
const { resolve } = require('path');
const { writeFileSync, existsSync } = require('fs');
const toMarkdown = require('to-markdown');
const { createElement } = require('react');
const { renderToString } = require('react-dom/server');

const cli = meow(
    `
    Usage
      $ auto-readme <input file> <output file>

    Example
      $ auto-readme ./readme.js README.md
`
);

const spinner = ora('Starting').start();

spinner.text = `Checking if file ${resolve(cli.input[0])} exists`;
let Readme;
if (existsSync(resolve(cli.input[0]))) {
    spinner.text = `Reading from file ${resolve(cli.input[0])}`;
    const readme = require(resolve(cli.input[0]));
    Readme = readme.default;
} else {
    throw new Error(
        `Unable to resolve path at argument 1. Got ${cli.input[0]}`
    );
}

spinner.text = 'Rendering components';
const contents = renderToString(createElement(Readme));
spinner.text = 'Converting to markdown';
const md = toMarkdown(contents.replace(/<!-- -->/gm, ''), {
    converters: [
        {
            filter: ['section', 'div'],
            replacement: content => `${content}\n\n`,
        },
        {
            filter(node) {
                return (
                    node.nodeName === 'PRE' &&
                    node.firstChild.nodeName === 'CODE'
                );
            },
            replacement(content, node) {
                const className = node.firstChild.getAttribute('class');
                if (/language-/.test(className)) {
                    const type = className.replace('language-', '');
                    return `\`\`\`${
                        type
                    }\n${node.firstChild.textContent.trim()}\n\`\`\`\n\n`;
                }
                return `\`\`\`\n${node.firstChild.textContent.trim()}\n\`\`\`\n\n`;
            },
        },
    ],
    gfm: true,
});

if (cli.input[1]) {
    spinner.text = `Writing to file ${resolve(__dirname, cli.input[1])}`;
    writeFileSync(resolve(__dirname, cli.input[1]), md);
    spinner.text = `Markdown contents successfully written to file ${resolve(
        __dirname,
        cli.input[1]
    )}`;
} else {
    console.log(md);
}

spinner.succeed();
