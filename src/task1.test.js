const stringLength = require('./task1.js');

it('"Aniekan" length', () => {
  expect(stringLength('Aniekan')).toBe(7);
});

it('"" length should through error', () => {
  expect(() => stringLength('')).toThrow(
    'the string should be at least 1 character long and not more than 10'
  );
});

it('"asynchronous" length should through error', () => {
  expect(() => stringLength('This is a string length test')).toThrow(
    'the string should be at least 1 character long and not more than 10'
  );
});
