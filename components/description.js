import React from 'react';
import { resolve } from 'path';

export default function Title(props) {
    let { description } = require(resolve(process.cwd(), 'package.json'));

    return [description, <br />, <br />];
}
