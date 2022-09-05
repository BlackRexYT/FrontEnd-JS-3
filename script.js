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

// function arrSum(arr){
//     let total = 0
//     for (i=0;i<arr.length;i++){
//         total += arr[i]
//     }
//     console.log(total)
// }
// arrSum([1,2,3,4,6,7])


/* 5 */

// function progressiveSum(num){
//     let sum = 0
//     for (i=num;i!=0;i--){
//         sum += i
//     }
//     return sum
// }

// console.log(progressiveSum(3))


/* 6 */


// function returnTime(num){
//     let timerMin = Math.floor(num / 60);
//     let timerSec = num % 60;

//     if (timerMin < 10){
//         if (timerSec < 10){
//             return '0' + timerMin + ':0' + timerSec
//         }
//         else{
//             return '0' + timerMin + ':' + timerSec
//         }
//     }
//     else{
//         if (timerSec < 10){
//             return timerMin + ':0' + timerSec
//         }
//         else{
//             return timerMin + ':' + timerSec
//         }
//     }
// }

// console.log(returnTime(125))


/* 7 */


// function getMax(arr){
//     let temp = arr[0]
//     for (i=0;i<arr.length;i++){
//         if (temp < arr[i]){
//             temp = arr[i]
//         }
//     }
//     return temp
// }
// console.log(getMax([1,200,3,4,-100,300]))


/* 8 */

function reverseString(str){
    for (i=0;i<str.length;i++){
        
    }
}

console.log(reverseString('test'))