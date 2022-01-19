const calculator = require('./task3.js');

describe('test calculator class', () => {
  it('add test', () => {
    expect(calculator.add(6, 2)).toBe(8);
  });

  it('subtract test', () => {
    expect(calculator.subtract(11, 3)).toBe(8);
  });

  it('divide test', () => {
    expect(calculator.divide(8, 2)).toBe(4);
  });

  it('multiply test', () => {
    expect(calculator.multiply(10, 5)).toBe(50);
  });
});
