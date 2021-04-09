/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortArray = [...arr];
  sortArray.sort((a, b) => a - b);
  const arrayWithoutMinusOne = sortArray.filter((item) => item !== -1);
  let index = 0;
  const result = [];
  arr.forEach((item) => {
    if (item === -1) {
      result.push(item);
    } else {
      result.push(arrayWithoutMinusOne[index]);
      index += 1;
    }
  });
  return result;
}

module.exports = sortByHeight;
