// Anonymous Function & IIFE
//a. Print odd numbers in an array
/*
oddArr = [];
(function (...arr) {
   for (let values of arr) {
    if(values%2!==0){
        oddArr.push(values)
    }
   }
   console.log(oddArr);
  })(4,5,13,8,10,52,13,17,19);
*/

//b. Convert all strings to title caps in a string array

// let capsStr =[];
// (function(...str) {
//   for (let value of str) {
//     let capsValue = value.toUpperCase();
//     capsStr.push(capsValue);
//   }
//   console.log(capsStr);
// })("tiku","goku","spd","luffy")

//c. sum of all numbers in an array

// let sum = 0; 
// (function (...nums) {
//     for(let value of nums ) {
//         sum+=value;
//     }
//     console.log(sum)
// })(4,5,6,2,3);

//d. Return all the prime numbers in an array

// let primeArr = [];
// (function (...nums) {
//   for (let value of nums) {
//     if (value <= 1) {
//       return false;
//     } else {
//       for (let i = 2; i < value; i++) {
//         if (value % i === 0) {
//           return false;
//         } else {
//           primeArr.push(value);
//         }

//       }
//     }
//   }   
//   console.log(primeArr);
// })(2, 4, 5, 7, 8, 9, 13, 15, 17)

//e. return all palindromes in an array

// function isPalindrome(str) {
//   for (let i=0;i<str.length/2;i++) {
//     if (str[i] !== str[str.length-i-1]){
//       return false
//     }
//     // console.log(str)
//     return true;
//   }
// }

// (function(...arr){
//   const result = arr.filter(isPalindrome);
//   console.log(result);
// })("121","343", "kayak","234") 

//f. return median of two sorted arrays of the same size

// const points1 = [1,15,12,38,26];
// const points2 = [45,30,13,2,17];
// // const points = points1.concat(points2)
// // console.log(points);
// // const sortedPoints = points.sort(function(a, b){return a - b});
// // console.log(sortedPoints);

// (function(points1,points2){
//   const points = points1.concat(points2);
//   const sortedPoints = points.sort(function(a, b){return a - b});
//   if (sortedPoints.length%2 == 0) {
//     let median = (sortedPoints[sortedPoints.length/2-1] + sortedPoints[sortedPoints.length/2])/2;
//   }
//   let median = sortedPoints[Math.floor(sortedPoints.length/2)];
//   console.log(median);
// })(points1,points2)  

//remove duplicates from an array

// (function (...arr) {
//   const removedDuplicates = arr.filter((item,
//     index) => arr.indexOf(item) === index);
//   console.log(removedDuplicates);
// })("apple", "mango", "apple",
//   "orange", "mango", "mango",12,13,12)

//rotate an array by k times

arr = [1, 2, 3, 4, 5];

(function(k){
  for (let i = 0; i<k;i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr)
})(2)




// Programs in arrow funtions
//a.Print odd numbers in an array

// let oddArr = [];
// const oddNums = (...arr) => {
//   for (let values of arr) {
//     if(values%2!==0){
//         oddArr.push(values)
//     }
//    }
//    console.log(oddArr);
// }
// oddNums(4,5,13,8,10,52,13,17,19);
