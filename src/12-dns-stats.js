/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!domains.length) {
    return {};
  }
  const map = new Map();
  for (let i = 0; i < domains.length; i += 1) {
    const split = domains[i].split('.').reverse();
    for (let j = 0; j < split.length; j += 1) {
      let key = '';
      let temp = j;
      while (temp >= 0) {
        key = `${split[temp]}.${key}`;
        temp -= 1;
      }
      key = key.slice(0, -1);
      key = `.${key}`;
      if (!map.has(key)) {
        map.set(key, 1);
      } else {
        map.set(key, map.get(key) + 1);
      }
    }
  }
  return Object.fromEntries(map);
}

module.exports = getDNSStats;
