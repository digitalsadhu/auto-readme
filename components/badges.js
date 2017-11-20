import React from 'react';
import { resolve } from 'path';
import getPkgRepo from 'get-pkg-repo';
import DavidDM from './badges/daviddm';
import DavidDMDev from './badges/daviddmdev';
import NpmVersion from './badges/npmversion';
import TravisCI from './badges/travisci';

const badgeRenderers = {
    travisci(value, options) {
        const { user, project } = options;
        const branch = typeof value === 'string' ? value : 'master';
        return <TravisCI branch={branch} user={user} project={project} />;
    },
    npmversion(value, options) {
        const { project } = options;
        return <NpmVersion project={project} />;
    },
    daviddm(value, options) {
        const { user, project } = options;
        return <DavidDM user={user} project={project} />;
    },
    daviddmdev(value, options) {
        const { user, project } = options;
        return <DavidDMDev user={user} project={project} />;
    },
};

export default function Badges(props) {
    const pkg = require(resolve(process.cwd(), 'package.json'));
    const repo = getPkgRepo(pkg);
    const { user, project } = repo;

    if (!pkg.repository) {
        throw new Error(
            `Expected property 'respository' to be defined in package.json when attempting to create badges but was not found.`
        );
    }

    const badges = [];

    for (const [key, value] of Object.entries(props)) {
        badges.push(badgeRenderers[key](value, { user, project }));
        badges.push(' ');
    }

    return badges;
}
