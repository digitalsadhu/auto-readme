import React from 'react';
import { resolve } from 'path';

export default function Title() {
    const { description } = require(resolve(process.cwd(), 'package.json'));
    return <div>{description}</div>;
}
