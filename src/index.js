module.exports = function towelSort (matrix) {
  if (matrix == null) {
    return [];
  }
  for (let i = 1; i <= matrix.length; i++) {
    if (i % 2 == 0) {
      matrix[i - 1] = matrix[i - 1].reverse();
    }
  }
  return matrix.flat(Infinity);
}