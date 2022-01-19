if (stringLength('Aniekan') === 1 && stringLength('Aniekan') < 10) {
  throw new Error('Check fail:length not enough');
}

const stringLength = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    count += 1;
  }
  return count;
};
