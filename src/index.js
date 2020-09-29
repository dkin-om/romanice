import standardSymbols from './standard-symbols';

import { toRoman, fromRoman } from './converter';

const areDistinct = (symbols) => {
  const cache = {};
  return symbols.every((s) => {
    cache[s] = !(cache[s]);
    return cache[s];
  });
};

export default function romanice(symbols = standardSymbols) {
  if (!(symbols.length > 0 && areDistinct(symbols))) {
    throw new Error('symbols must be distinct, e.g. I, V, X, L, C, D, M');
  }

  return {
    toRoman: (num) => toRoman(num, symbols),
    fromRoman: (num) => fromRoman(num, symbols),
  };
}