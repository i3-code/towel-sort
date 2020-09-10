
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let res = [];
  for (let i in matrix) {
    res = (i % 2 == 0) ? res.concat(matrix[i]) : res.concat(matrix[i].reverse());
  }
  return res;
}
