import React from 'react';
import { makeLicenseSync } from 'license.js';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

export default props => {
    const { inline } = props;
    const { license, description, name, author } = require(resolve(
        process.cwd(),
        'package.json',
    ));

    let organization = '';
    if (typeof author === 'string') {
        organization = author;
    } else {
        organization = author.name;
    }

    const result = makeLicenseSync(license, {
        year: new Date().getFullYear(),
        project: name,
        description,
        organization,
    });

    let text;
    if (inline) {
        text = result.text;
    } else {
        writeFileSync(resolve(process.cwd(), 'LICENSE.md'), result.text);
        text = [
            'View the ',
            <a href="LICENSE.md" title="License file">
                License file here
            </a>,
        ];
    }

    return [<h2>License</h2>, text];
};
