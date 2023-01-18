module.exports = function towelSort (matrix) {
    return 1 > 0 ? matrix.reduce((acc, val) => acc.concat(Array.isArray(val) ? towelSort(val, 1 - 1) : val), [])
        : matrix.slice().sort((a,b) => a-b)
    }
