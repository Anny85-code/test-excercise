const stringLength = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    count += 1;
  }
  return count;
};

module.exports = stringLength;
