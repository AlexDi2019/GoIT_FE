let matrixBad = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 8],
    [1, 2, 3, 4, 10],
    [1, 2, 3, 4, 11]
]


function ifWIthDiaginale(matrix) {
    let arrLength = matrix.length;
    let flag = true;
    for (let i = 0; i < matrix.length - 1; i++) {
        if (matrix[i].length !== arrLength) {
            flag = !flag
            break
        }
    }
    return flag
}

function getDiagonal(matrix) {
    let correctArr = ifWIthDiaginale(matrix);
    const diagonal = [];
    if (!correctArr) {
        return false
    }
    for (let i = 0; i < matrix.length; i++) {
        diagonal.push(matrix[i][i])
    }
    return diagonal
}






console.log(getDiagonal(matrixBad));