import React from 'react';
import PropTypes from 'prop-types';

export default function DavidDM(props) {
    const { user, project } = props;
    const href = `https://david-dm.org/${user}/${project}`;
    const src = `https://img.shields.io/david/${user}/${project}.svg`;
    const title = "View the status of this project's dependencies on DavidDM";
    return (
        <a href={href} title={title}>
            <img src={src} alt="Dependency Status" />
        </a>
    );
}

DavidDM.propTypes = {
    branch: PropTypes.string,
    user: PropTypes.string,
    project: PropTypes.string,
};
