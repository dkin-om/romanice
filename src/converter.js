const valueOfSymbolAt = (idx) => {
  if ((idx % 2) === 0) return 10 ** (idx / 2);
  return 5 * valueOfSymbolAt(idx - 1);
};

const maxPossibleValue = (size) => {
  const sb = (size % 2) === 0 ? (size - 2) : (size - 1);
  return valueOfSymbolAt(size) - valueOfSymbolAt(sb) - 1;
};

export function toRoman(num, symbols) {
  const max = maxPossibleValue(symbols.length);
  if (!(num >= 0 && num <= max)) {
    throw new Error(`num must be in the range [0, ${max}]`);
  }

  const result = [];

  let n = num;

  for (let i = symbols.length - 1; i >= 0; i -= 1) {
    const value = valueOfSymbolAt(i);

    const count = Math.floor(n / value);

    if (count < 4) {
      for (let j = 0; j < count; j += 1) {
        result.push(symbols[i]);
      }
    } else if (count === 4) {
      if (result[result.length - 1] !== symbols[i + 1]) {
        result.push(symbols[i]);
        result.push(symbols[i + 1]);
      } else {
        result.pop();
        result.push(symbols[i]);
        result.push(symbols[i + 2]);
      }
    } else {
      // count > 4 is not possible
    }

    n -= value * count;
  }

  return result.join('');
}

export function fromRoman(num, symbols) {
  if (!num.length) return 0;

  let numRegex = '';
  for (let i = 0; i < symbols.length; i += 2) {
    let digitRegex = `${symbols[i]}{0,3}`;
    if (i + 1 < symbols.length) digitRegex += `|${symbols[i]}${symbols[i + 1]}|${symbols[i + 1]}${symbols[i]}{0,3}`;
    if (i + 2 < symbols.length) digitRegex += `|${symbols[i]}${symbols[i + 2]}`;
    numRegex = `(${digitRegex})${numRegex}`;
  }

  const matches = num.match(new RegExp(`^${numRegex}$`));

  if (!matches) {
    throw new Error('num must be a valid numeral');
  }

  let result = 0;

  matches.shift();

  matches.forEach((match, idx) => {
    const i = 2 * (matches.length - idx - 1);

    let count = 0;
    if (match.startsWith(symbols[i])) {
      if (match.endsWith(symbols[i])) count = match.length;
      else if (match.endsWith(symbols[i + 1])) count = 4;
      else if (match.endsWith(symbols[i + 2])) count = 9;
    } else if (match.startsWith(symbols[i + 1])) {
      count = 4 + match.length;
    }

    result += valueOfSymbolAt(i) * count;
  });

  return result;
}
