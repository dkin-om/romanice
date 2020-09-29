import assert from 'assert';

import * as converters from './converter.testcase';

Object.entries(converters)
  .forEach(([converterName, { default: { converter, testCases } }]) => {
    describe(`${converterName}.toRoman`, () => {
      testCases.forEach((testCase) => {
        it(`${testCase.decimal} -> ${testCase.roman}`, () => {
          assert.equal(converter.toRoman(testCase.decimal), testCase.roman);
        });
      });
    });

    describe(`${converterName}.fromRoman`, () => {
      testCases.forEach((testCase) => {
        it(`${testCase.roman} -> ${testCase.decimal}`, () => {
          assert.equal(converter.fromRoman(testCase.roman), testCase.decimal);
        });
      });
    });
  });
