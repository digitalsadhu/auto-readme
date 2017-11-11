import React from 'react';
import S from 'string';
import { resolve } from 'path';

export default function Title(props) {
    const { capitalize, dasherize, humanize, titleCase, underscore } = props;
    let { name } = require(resolve(process.cwd(), 'package.json'));

    if (capitalize) {
        name = S(name).capitalize().s;
    }

    if (dasherize) {
        name = S(name).dasherize().s;
    }

    if (humanize) {
        name = S(name).humanize().s;
    }

    if (titleCase) {
        name = S(name).titleCase().s;
    }

    if (underscore) {
        name = S(name).underscore().s;
    }

    return <h1>{name}</h1>;
}
