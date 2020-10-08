
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    if (matrix.length === 0) return matrix;
    return matrix.reduce((acc, curr, index) => {
      return index % 2 === 0 ? acc.concat(curr) : acc.concat(curr.reverse());
    }, [])
}
