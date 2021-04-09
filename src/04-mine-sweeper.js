/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function checkNeighbors(i, j, matrix) {
  let counter = 0;
  if ((j + 1) < matrix[i].length) {
    counter += matrix[i][j + 1] ? 1 : 0;
  }
  if ((i + 1) < matrix.length) {
    counter += matrix[i + 1][j] ? 1 : 0;
  }
  if ((i - 1) >= 0) {
    counter += matrix[i - 1][j] ? 1 : 0;
  }
  if ((j - 1) >= 0) {
    counter += matrix[i][j - 1] ? 1 : 0;
  }
  if ((j + 1) < matrix[i].length && (i - 1) >= 0) {
    counter += matrix[i - 1][j + 1] ? 1 : 0;
  }
  if ((i + 1) < matrix.length && (j + 1) < matrix[i].length) {
    counter += matrix[i + 1][j + 1] ? 1 : 0;
  }
  if ((i - 1) >= 0 && (j - 1) >= 0) {
    counter += matrix[i - 1][j - 1] ? 1 : 0;
  }
  if ((j - 1) > 0 && (i + 1) < matrix.length) {
    counter += matrix[i + 1][j - 1] ? 1 : 0;
  }
  return counter;
}

function minesweeper(matrix) {
  const result = [...matrix];
  const state = {};
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      state[`${i}${j}`] = checkNeighbors(i, j, matrix);
    }
  }
  Object.keys(state).forEach((key) => {
    const i = key.split('')[0];
    const j = key.split('')[1];
    result[i][j] = state[`${i}${j}`];
  });
  return result;
}

module.exports = minesweeper;
