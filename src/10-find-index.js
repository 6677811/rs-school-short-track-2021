/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function search(array, l, r, x) {
  while (l <= r) {
    const medium = Math.floor((l + r) / 2);
    if (x === array[medium]) {
      return medium;
    }
    // If x is smaller, ignore right half
    if (x < array[medium]) {
      // eslint-disable-next-line no-param-reassign
      r = (medium - 1);
    } else {
      // eslint-disable-next-line no-param-reassign
      l = (medium + 1);
    }
  }
  return -1;
}

function findIndex(arr, val) {
  return search(arr, 0, arr.length - 1, val);
}

module.exports = findIndex;
