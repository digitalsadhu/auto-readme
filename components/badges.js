import React from 'react';
import { resolve } from 'path';
import getPkgRepo from 'get-pkg-repo';

const badgeRenderers = {
    travisci(value, options) {
        const { user, project } = options;
        let branch = 'master';
        if (typeof value === 'string') {
            branch = value;
        }
        return (
            <a
                href={`http://travis-ci.org/${user}/${project}`}
                title="Check this project's build status on TravisCI"
            >
                <img
                    src={`https://img.shields.io/travis/${user}/${project}/${
                        branch
                    }.svg`}
                    alt="Travis CI Build Status"
                />
            </a>
        );
    },
    npmversion(value, options) {
        const { project } = options;
        return (
            <a
                href={`https://npmjs.org/package/${project}`}
                title="View this project on NPM"
            >
                <img
                    src={`https://img.shields.io/npm/v/${project}.svg`}
                    alt="NPM version"
                />
            </a>
        );
    },
    daviddm(value, options) {
        const { user, project } = options;
        return (
            <a
                href={`https://david-dm.org/${user}/${project}`}
                title="View the status of this project's dependencies on DavidDM"
            >
                <img
                    src={`https://img.shields.io/david/${user}/${project}.svg`}
                    alt="Dependency Status"
                />
            </a>
        );
    },
    daviddmdev(value, options) {
        const { user, project } = options;
        return (
            <a
                href={`https://david-dm.org/${user}/${
                    project
                }#info=devDependencies`}
                title="View the status of this project's development dependencies on DavidDM"
            >
                <img
                    src={`https://img.shields.io/david/dev/${user}/${
                        project
                    }.svg`}
                    alt="Dev Dependency Status"
                />
            </a>
        );
    },
};

export default function Badges(props) {
    let pkg = require(resolve(process.cwd(), 'package.json'));
    const repo = getPkgRepo(pkg);
    const { user, project } = repo;

    if (!pkg.repository) {
        throw new Error(
            `Expected property 'respository' to be defined in package.json when attempting to create badges but was not found.`,
        );
    }

    const badges = [];

    for (const [key, value] of Object.entries(props)) {
        badges.push(badgeRenderers[key](value, { user, project }));
    }

    return badges;
}
