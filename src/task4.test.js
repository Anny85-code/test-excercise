const capitalize = require('./task4.js');

describe('test capitalize function', () => {
  it('"programming" test', () => {
    expect(capitalize('programming')).toBe('Programming');
  });

  it('"software" test', () => {
    expect(capitalize('software')).toBe('Software');
  });
});
