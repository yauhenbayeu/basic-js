const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nToString = n.toString();
  let max = 0;

  for (let i = 0; i < nToString.length; i++) {
    const num = parseInt(nToString.substring(0, i) + nToString.substring(i + 1), 10);

    if (num > max) {
      max = num;
    }
  }

  return max;
}

module.exports = {
  deleteDigit
};
