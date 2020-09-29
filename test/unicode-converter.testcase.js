import romanice from '../src/index';

export default {
  converter: romanice(['Ⅰ', 'Ⅴ', 'Ⅹ', 'Ⅼ', 'Ⅽ', 'Ⅾ', 'ↀ', 'ↁ', 'ↂ']),
  testCases: [
    { decimal: 0, roman: '' },
    { decimal: 1, roman: 'Ⅰ' },
    { decimal: 2, roman: 'ⅠⅠ' },
    { decimal: 3, roman: 'ⅠⅠⅠ' },
    { decimal: 4, roman: 'ⅠⅤ' },
    { decimal: 5, roman: 'Ⅴ' },
    { decimal: 6, roman: 'ⅤⅠ' },
    { decimal: 7, roman: 'ⅤⅠⅠ' },
    { decimal: 8, roman: 'ⅤⅠⅠⅠ' },
    { decimal: 9, roman: 'ⅠⅩ' },
    { decimal: 10, roman: 'Ⅹ' },
    { decimal: 11, roman: 'ⅩⅠ' },
    { decimal: 12, roman: 'ⅩⅠⅠ' },
    { decimal: 2020, roman: 'ↀↀⅩⅩ' },
    { decimal: 2421, roman: 'ↀↀⅭⅮⅩⅩⅠ' },
    { decimal: 3888, roman: 'ↀↀↀⅮⅭⅭⅭⅬⅩⅩⅩⅤⅠⅠⅠ' },
    { decimal: 3999, roman: 'ↀↀↀⅭↀⅩⅭⅠⅩ' },
    { decimal: 4000, roman: 'ↀↁ' },
    { decimal: 38888, roman: 'ↂↂↂↁↀↀↀⅮⅭⅭⅭⅬⅩⅩⅩⅤⅠⅠⅠ' },
    { decimal: 39999, roman: 'ↂↂↂↀↂⅭↀⅩⅭⅠⅩ' },
  ],
};
