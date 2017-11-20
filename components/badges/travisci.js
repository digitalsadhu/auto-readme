import React from 'react';
import PropTypes from 'prop-types';

export default function TravisCI(props) {
    const { branch, user, project } = props;
    const href = `http://travis-ci.org/${user}/${project}`;
    const src = `https://img.shields.io/travis/${user}/${project}/${branch ||
        'master'}.svg`;
    return (
        <a href={href} title="Check this project's build status on TravisCI">
            <img src={src} alt="Travis CI Build Status" />
        </a>
    );
}

TravisCI.propTypes = {
    branch: PropTypes.string,
    user: PropTypes.string,
    project: PropTypes.string,
};
