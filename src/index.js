module.exports = function towelSort (matrix) {
        return matrix.reduce((acc, item) => {
            item.sort((a, b) => a - b ).map(el => acc.push(el));
            return acc;
        }, [])
    }
