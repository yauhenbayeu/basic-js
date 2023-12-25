const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address( n ) {
console.log(n)
if (typeof n === 'string') {
  let isCorrectAddr = true;
  const arr = n.split('-');
  
  if(arr.length !== 6) isCorrectAddr = false

  arr.forEach(row => {

    if(row.length !== 2 || !/^[0-9A-Fa-f]{2}$/.test(row)) isCorrectAddr = false
  })

  return isCorrectAddr
}
else {
  return false
}


}

// isMAC48Address( '00-1B-63-84-45-E6' )

module.exports = {
  isMAC48Address
};
