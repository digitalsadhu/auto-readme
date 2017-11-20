import React from 'react';
import _s from 'string';
import { resolve } from 'path';
import PropTypes from 'prop-types';

export default function Title(props) {
    const { capitalize, dasherize, humanize, titleCase, underscore } = props;
    let { name } = require(resolve(process.cwd(), 'package.json'));

    if (capitalize) {
        name = _s(name).capitalize().s;
    }

    if (dasherize) {
        name = _s(name).dasherize().s;
    }

    if (humanize) {
        name = _s(name).humanize().s;
    }

    if (titleCase) {
        name = _s(name).titleCase().s;
    }

    if (underscore) {
        name = _s(name).underscore().s;
    }

    return <h1>{name}</h1>;
}

Title.propTypes = {
    capitalize: PropTypes.bool,
    dasherize: PropTypes.bool,
    humanize: PropTypes.bool,
    titleCase: PropTypes.bool,
    underscore: PropTypes.bool,
};
