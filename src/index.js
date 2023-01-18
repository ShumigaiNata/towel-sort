module.exports = function towelSort (matrix) {
    if (!matrix) return [];
    return matrix.map((element, index) => {
        return (index % 2) ? element.reverse() : element;
    }).flat();
}
