const calculator = require('./task3');

describe('testing calculator class', () => {
  it('adding test', () => {
    expect(calculator.add(6, 2)).toBe(8);
  });

  it('subtracting test', () => {
    expect(calculator.subtract(11, 3)).toBe(8);
  });

  it('dividing test', () => {
    expect(calculator.divide(8, 2)).toBe(4);
  });

  it('multiplying test', () => {
    expect(calculator.multiply(10, 5)).toBe(50);
  });
});
