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


// function reverseString(str){
//     let reversedString = ''
//     for (i=0;i<str.length;i++){
//         reversedString = str[i] + reversedString
//     }
//     return reversedString
// }

//ez way

// function reverseString(str){
//     return str.split('').reverse().join('')
// }

// console.log(reverseString('fahad'))


/* 9 */


// function convertToZero(arr){
//     for(let i=0;i<arr.length;i++){
//         arr[i] = 0
//     }

//     let arrSecond = arr
//     return arrSecond
// }

//array fill method (ez)

// function convertToZero(arr){
//     return new Array(arr.length).fill(0)
// }

//array map method (important)

// function convertToZero(arr){
//     return arr.map(elem => 0)
// }

// console.log(convertToZero([1,3,4,5,7]))


/* 10 */


//for loop method

// function removeApples(arr){
//     let noApples = []
//     for (i=0;i<arr.length;i++){
//         if (arr[i] !== 'Apples'){
//             noApples.push(arr[i])
//         }
//     }
//     return noApples
// }

// array filter

// function removeApples(arr){
//     return arr.filter(elem => elem !== 'Apples')
// }


// console.log(removeApples(['banana','orange','Apples']))


/* 11 */


// function filterOutFalsy(arr){
//     return arr.filter(elem => !elem === false)
// }

// console.log(filterOutFalsy([1,2,3,4,0]))


/* 12 */

// function truthyToFalsy(arr){
//     return arr.map(elem => !elem)
// }

// console.log(truthyToFalsy([1,2,3,4,0,1,2,0]))