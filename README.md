# Freedom Editor Vue Code Block

[![License](https://img.shields.io/badge/license-MIT-blue)](https://img.shields.io/github/license/winston0410/freedom-editor) [![Maintainability](https://api.codeclimate.com/v1/badges/60e1e3c1243a117d8e7f/maintainability)](https://codeclimate.com/github/winston0410/freedom-editor-vue-code-block/maintainability) [![Known Vulnerabilities](https://snyk.io/test/github/winston0410/freedom-editor-vue-code-block/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/freedom-editor-vue-code-block?targetFile=package.json) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/f1af9722eab64980abfe8c8ca2192eea)](https://www.codacy.com/manual/winston0410/freedom-editor-vue-code-block?utm_source=github.com&utm_medium=referral&utm_content=winston0410/freedom-editor-vue-code-block&utm_campaign=Badge_Grade)

A code block built with [Vue](https://vuejs.com/) for Freedom Editor.

## Installation

```
npm i @freedom-editor/vue-code-block
```

## Usage

Import this block to the script where you config Freedom Editor. Create a new instance.

```
import { Code } from '@freedom-editor/vue-code-block'

const codeBlock = new Code()
```

### Register paragraph block in Freedom Editor instance

Register this block in `options.registeredBlocks`.

```
registeredBlocks: [
  codeBlock
]
```

## API Reference

TODO

## License

This project is licensed under the MIT License - see the [license](https://github.com/winston0410/freedom-editor/LICENSE.md) for more details.
