import React from 'react';
import {
    capitalize as cap,
    dasherize as dash,
    humanize as hu,
    titleize as ti,
    underscored as und,
} from 'underscore.string';
import { resolve } from 'path';
import PropTypes from 'prop-types';

export default function Title(props) {
    const { capitalize, dasherize, humanize, titleize, underscored } = props;
    let { name } = require(resolve(process.cwd(), 'package.json'));

    if (capitalize) {
        name = cap(name);
    }

    if (dasherize) {
        name = dash(name);
    }

    if (humanize) {
        name = hu(name);
    }

    if (titleize) {
        name = ti(name);
    }

    if (underscored) {
        name = und(name);
    }

    return <h1>{name}</h1>;
}

Title.propTypes = {
    capitalize: PropTypes.bool,
    dasherize: PropTypes.bool,
    humanize: PropTypes.bool,
    titleize: PropTypes.bool,
    underscored: PropTypes.bool,
};
