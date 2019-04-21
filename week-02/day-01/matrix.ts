// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

'use strict';



function creatematrix(matrixSize): void {
    const matrix: number [][] = [];

    for(let i: number = 0; i < matrixSize; i++) {
        matrix[i] = [];
    for(let j: number = 0; j < matrixSize; j++) {
        matrix [i] [j] = j === (matrixSize - i - 1) ? 1:0;
    }
    console.log(matrix[i]);
}
}

creatematrix(5);