const reverseString = require('./task2');

it('String not reversed', () => {
  expect(reverseString('Microverse')).toBe('esrevorciM');
});

// if (reverseString('Microverse') !== 'esrevorciM') {
//   throw new Error('Check fail:String not reversed');
// }
