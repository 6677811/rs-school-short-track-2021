/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const res1 = s1
    .split('')
    .reduce((accumulator, currentValue) => {
      if (currentValue in accumulator) {
        accumulator[currentValue] += 1;
      } else {
        accumulator[currentValue] = 1;
      }
      return accumulator;
    }, {});

  const res2 = s2
    .split('')
    .reduce((accumulator, currentValue) => {
      if (currentValue in accumulator) {
        accumulator[currentValue] += 1;
      } else {
        accumulator[currentValue] = 1;
      }
      return accumulator;
    }, {});
  Object.keys(res1)
    .forEach((key) => {
      if (key in res2) {
        result += res2[key] < res1[key] ? res2[key] : res1[key];
      }
    });
  return result;
}

module.exports = getCommonCharacterCount;
