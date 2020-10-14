
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    return matrix.map((n, i) => (i % 2) ? n.reverse() : n).flat();
}
