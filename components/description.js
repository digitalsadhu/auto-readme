import React from 'react';
import { resolve } from 'path';
import PropTypes from 'prop-types';

export default function Description(props) {
    const { title } = props;
    const { description } = require(resolve(process.cwd(), 'package.json'));
    let titleSection = '';
    if (title) titleSection = <h2>Description</h2>;
    if (typeof title === 'string') titleSection = <h2>{title}</h2>;
    return (
        <div>
            {titleSection}
            {description}
        </div>
    );
}

Description.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
