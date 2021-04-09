/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function getNewName(name) {
  return `${name}1`;
}

function encodeLine(str) {
  const arr = str.split('');
  const result = {};
  let answer = '';
  arr.forEach((item) => {
    if (!(item in result)) {
      result[item] = 1;
    } else if (Object.keys(result)[Object.keys(result).length - 1] === item) {
      result[item] += 1;
    } else {
      while (item in result) {
        // eslint-disable-next-line no-param-reassign
        item = getNewName(item);
      }
      result[item] = 1;
    }
  });
  Object.keys(result)
    .forEach((key) => {
      answer += result[key] !== 1 ? `${result[key]}${key.replace('1', '')}` : `${key.replace('1', '')}`;
    });
  return answer;
}

module.exports = encodeLine;
