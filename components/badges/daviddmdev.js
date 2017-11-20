import React from 'react';
import PropTypes from 'prop-types';

export default function DavidDMDev(props) {
    const { user, project } = props;
    const href = `https://david-dm.org/${user}/${project}#info=devDependencies`;
    const src = `https://img.shields.io/david/dev/${user}/${project}.svg`;
    const title =
        "View the status of this project's development dependencies on DavidDM";
    return (
        <a href={href} title={title}>
            <img src={src} alt="Dev Dependency Status" />
        </a>
    );
}

DavidDMDev.propTypes = {
    branch: PropTypes.string,
    user: PropTypes.string,
    project: PropTypes.string,
};
