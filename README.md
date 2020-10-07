# romanice - Convert to/from Roman numerals

[![NPM](https://nodei.co/npm/romanice.png?compact=true)](https://npm.im/romanice)

[![Version](https://img.shields.io/npm/v/romanice)](https://npm.im/romanice)
[![Build Status](https://travis-ci.com/dkin-om/romanice.svg?branch=master)](https://travis-ci.com/dkin-om/romanice)
[![Coverage Status](https://coveralls.io/repos/github/dkin-om/romanice/badge.svg)](https://coveralls.io/github/dkin-om/romanice)
[![License](https://img.shields.io/npm/l/romanice)](https://github.com/dkin-om/romanice/blob/master/LICENSE)

A JavaScript library for converting to/from Roman numerals, e.g., `3888`↔`MMMDCCCLXXXVIII`, `3999`↔`MMMCMXCIX`

## Install

```
npm install romanice
```

## Usage

### Standard - `I`, `V`, `X`, `L`, `C`, `D`, `M`

```javascript
const { romanice } = require('romanice');
const standardConverter = romanice();

const roman = standardConverter.toRoman(3888);
// roman === 'MMMDCCCLXXXVIII'

const decimal = standardConverter.fromRoman('MMMCMXCIX');
// decimal === 3999
```

### Unicode - `Ⅰ`, `Ⅴ`, `Ⅹ`, `Ⅼ`, `Ⅽ`, `Ⅾ`, `ↀ`, `ↁ`, `ↂ`

```javascript
const { romanice } = require('romanice');
const unicodeConverter = romanice(['Ⅰ', 'Ⅴ', 'Ⅹ', 'Ⅼ', 'Ⅽ', 'Ⅾ', 'ↀ', 'ↁ', 'ↂ']);

const roman = unicodeConverter.toRoman(38888);
// roman === 'ↂↂↂↁↀↀↀⅮⅭⅭⅭⅬⅩⅩⅩⅤⅠⅠⅠ'

const decimal = unicodeConverter.fromRoman('ↂↂↂↀↂⅭↀⅩⅭⅠⅩ');
// decimal === 39999
```

## Syntax

### *`romanice([symbols])`*

*`symbols`* - Array of Roman numeral symbols representing the character set. If omitted, assumes the default `['I', 'V', 'X', 'L', 'C', 'D', 'M']`.

## License

[MIT](https://github.com/dkin-om/romanice/blob/master/LICENSE)
