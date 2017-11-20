import React from 'react';
import PropTypes from 'prop-types';

export default function NpmVersion(props) {
    const { project } = props;
    const href = `https://npmjs.org/package/${project}`;
    const src = `https://img.shields.io/npm/v/${project}.svg`;
    return (
        <a href={href} title="View this project on NPM">
            <img src={src} alt="NPM version" />
        </a>
    );
}

NpmVersion.propTypes = {
    branch: PropTypes.string,
    user: PropTypes.string,
    project: PropTypes.string,
};
