/* 1 */


// function falsyOrTruthy(elem1,elem2){
//     return (!elem1) ? elem1 : elem2
//     if (!elem1){
//         return elem1
//     }
//     else{
//         return elem2
//     }
// }
// console.log(falsyOrTruthy(0,'fahad'))


/* 2 & 3 */

// function arrLength(arr){
//     return arr[arr.length-1]
// }

function arrSum(arr){
    total = 0
    for (i=0;i<arr.length;i++){
        total += arr[i]
    }
    console.log(total)
}
arrSum([1,2,3,4,6,7])