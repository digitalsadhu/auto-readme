import React from 'react';
import {
    Readme,
    Title,
    Badges,
    License,
    Description,
    Markdown,
    Install,
} from './components';

const ReadmeComponent = () => (
    <Readme>
        <Title titleCase humanize />
        <Description />
        <Badges travisci daviddm daviddmdev npmversion />
        <Install title="Install instructions" yarn npm />
        <Markdown file="./usage.md" />
        <Markdown file="./contributing.md" />
        <License />
    </Readme>
);

export default ReadmeComponent;
