const stringLength = (str) => {
  if (str.length < 1 || str.length > 10) {
    throw new Error(
      'the string should be at least 1 character long and not more than 10'
    );
  } else return str.length;
};

module.exports = stringLength;
