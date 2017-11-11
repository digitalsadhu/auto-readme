'use strict';

import React from 'react';
import { Readme, Title, Badges, TOC, License, Description } from './components';

export default () => (
    <Readme>
        <Title titleCase humanize />
        <Description />
        <Badges travisci daviddm daviddmdev npmversion />
        {/* <TOC /> */}
        {/* <Include src='./usage.md' /> */}
        <License />
    </Readme>
);
