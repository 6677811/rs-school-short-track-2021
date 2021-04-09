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
function deleteDigit(num) {
  const numString = num.toString();
  const array = [];
  let result = 0;

  for (let i = 0; i < numString.length; i += 1) {
    array.push(num.toString().slice(0, i) + num.toString().slice(i + 1));
  }
  array.reduce((accumulator, currentValue) => {
    if (accumulator < currentValue) {
      result = currentValue;
      return currentValue;
    }
    result = accumulator;
    return accumulator;
  }, 0);
  return +result;
}

module.exports = deleteDigit;
