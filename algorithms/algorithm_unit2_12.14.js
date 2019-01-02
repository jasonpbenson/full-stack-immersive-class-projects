//Starting in the top left corner of a 2×2 grid, and only being able to 
//move to the right and down, there are exactly 6 routes to the bottom 
//right corner.
//How many such routes are there through a 20×20 grid?

//ian's code:

// let numRows = 10;
// let numCols = 10;
// let matrix = [];
// for (let row = 0; row < numRows; row++){
//   matrix.push([]);
//   for(let cell = 0; cell < numCols; cell++){
//     if (row === 0 || cell === 0){
//       matrix[row][cell] = 1;
//     } else {
//       matrix[row][cell] = matrix[row-1][cell] + matrix[row][cell-1];
//     }
//   }
// }
// matrix.forEach(row => console.log(row));
// console.log(`The number of paths is ${matrix[numRows-1][numCols-1]}`);

//rob's code
// function findRoutes(gridSize){
//     let routeMatrix = [];
//     for (let i = 1; i <= gridSize; i++){
//         routeMatrix.push(1);
//     }

//     for (let i = 1; i <= gridSize; i++){
//         for(let j = 1; j < gridSize; j++){
//             routeMatrix[j] = routeMatrix[j] + routeMatrix[j-1];
//         }

//         routeMatrix[i] = 2 * routeMatrix[i-1];
//     }
//     console.log(routeMatrix);
//     return routeMatrix[gridSize];
// }

// gridSize = 4;

// n = findRoutes(gridSize);

//A palindromic number reads the same both ways. The largest palindrome 
//made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.

//kyle's code

let highestPalindrome = 0;
let reverseStr = str => {
    let arr = str.split('');
    let reversed = arr.reverse();
    return reversed.join(''); 
}
for(let i = 999; i > 100; i--) {
    for(let j = i; j > 100; j--) {
        let product = i * j;

        let productStr = product.toString();
        if (productStr === reverseStr(productStr)){
            if(product > highestPalindrome) {
                highestPalindrome = product;
            }
        } 
    }
}
console.log(highestPalindrome);
