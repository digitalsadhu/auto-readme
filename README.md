# Auto Readme

Automatically create README.md contents

[![Travis CI Build Status](https://img.shields.io/travis/digitalsadhu/auto-readme/master.svg)](http://travis-ci.org/digitalsadhu/auto-readme "Check this project's build status on TravisCI")[![Dependency Status](https://img.shields.io/david/digitalsadhu/auto-readme.svg)](https://david-dm.org/digitalsadhu/auto-readme "View the status of this project's dependencies on DavidDM")[![Dev Dependency Status](https://img.shields.io/david/dev/digitalsadhu/auto-readme.svg)](https://david-dm.org/digitalsadhu/auto-readme#info=devDependencies "View the status of this project's development dependencies on DavidDM")[![NPM version](https://img.shields.io/npm/v/auto-readme.svg)](https://npmjs.org/package/auto-readme "View this project on NPM")

## Install instructions

### npm

```bash
npm install auto-readme
```

### yarn

```bash
yarn add auto-readme
```

## Usage

This module is intended to be used to help make creating and maintaining readmes easy. It uses a react component approach to building readme templates and provides all the primitive components you might need to do so. You can of course create additional components in order to extend what this module does. If you do so, please consider contributing them back to the project.

### Basic usage

Define a template file

```js
// readme.js

import { Readme, Title, Description } from 'auto-readme'

export default () => (
    <Readme>
        <Title>
        <Description>
    </Readme>
)
```

```bash
auto-readme ./readme.js README.md
```

This will generate a README.md file with the the following contents:

```md
# my-project-name

This is a description of my project taken from package.json
```

### Components

While any react component can be created and used, we provide the following components out of the box.

#### Readme

Wrapper component. This component should be returned at the top level

#### Title

Title display component. Determines the title from `package.json`. Additionally the title can be formatted by passing the component the following properties.

*   capitalize
*   dasherize
*   humanize
*   titleCase
*   underscore

_Example_

```jsx
<Title titleCase humanize />
```

#### Description

Description display component. Determines description from `package.json`.

#### Badges

Badge display. Displays desired badges as specified in component properties. Uses `package.json` to determine values to generate badges from. Currently only supports the following badges:

*   travisci
*   npmversion
*   daviddm
*   daviddmdev

_Example_

```jsx
<Badges travisci npmversion daviddm daviddmdev />
```

#### Install

Install instructions display component. Includes a configurable section title.

Component properties are:

*   `title` Allows overriding of the section title
*   `npm` (default) Specifies that install instructions for npm should be included
*   `yarn` Specifies that install instructions for yarn should be included

_Example_

```jsx
<Install />
```

_Example_

```jsx
<Install title='Install instructions' yarn npm />
```

#### License

License information display component. Determines license from `package.json` license field. Can display inline in the README file or externally in a license file with link from README.md.

_Example_ Creates an external LICENSE.md file and links to it.

```jsx
<License />
```

_Example_ Inlines license content

```jsx
<License inline />
```

#### Markdown

Component for including markdown content from external files. Useful so that you can write chunks of markdown such as guides for `usage` or `contributing`.

_Example_

```jsx
<Markdown file='usage.md' />
```

## Contributing

We use semantic-release etc.

## License

View the [License file here](LICENSE.md "License file")