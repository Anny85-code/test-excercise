const stringLength = require('./strlength');

it('length not enough', () => {
  expect(stringLength('Aniekan')).toBe(7);
});

if (stringLength('Aniekan') === 1 && stringLength('Aniekan') < 10) {
  throw new Error('Check fail:length not enough');
}
