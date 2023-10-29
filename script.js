//1=> Do the below programs in anonymous function & IIFE
//a) Print odd numbers in an array
//annonymous function
let result1=[];
let odd1=function (arr1){
    for(let i=0; i<arr1.length; i++){
        if(arr1[i]%2 !== 0){
            result1.push(arr1[i])
        }
    }
    return result1
}
console.log(odd1([1,2,3,65]))

//IIFE function
let result2=[];
(function (arr2){
    for(let i=0; i<arr2.length; i++){
        if(arr2[i]%2 !== 0){
            result2.push(arr2[i])
        }
    }
    console.log(result2.sort());
})
([21,23,45,65,24,4,6,8,1])

//b) Convert all the strings to title caps in a string array
//annonymous function
let stringArray = ["this is a string", "another example", "one more string"];

// anonymous function
let titleCapsAnonymous = function (arr) {
    return arr.map(function (str) {
        return str.split(' ').map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    });
}(stringArray);

console.log("Title Caps using anonymous function:");
console.log(titleCapsAnonymous);

// IIFE function
let titleCapsIIFE = (function (arr) {
    return arr.map(function (str) {
        return str.split(' ').map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    });
})(stringArray);

console.log("\nTitle Caps using IIFE:");
console.log(titleCapsIIFE);


//c) Sum of all numbers in an array
//annonymous function

let sum=0;
let a= function (arr3){
    for(let i=0; i<arr3.length; i++){
        sum += arr3[i]
    }
    return sum;
}
console.log(a([2,2,2,2,2]))
//IIFE function

let sum1=0;
(function (arr4){
    for(let i=0; i<arr4.length; i++){
        sum1 += arr4[i]
    }
    console.log(sum1)
})
([3,3,3,3,3])

//d) Return all the prime numbers in an array
//annonymous function
let prime=[];
let b=function (arr5){
    for(let i=0; i<arr5.length; i++){
        prime.push(arr5[i])
    }
    return prime;
}
b([3,5,7,11,13,17,19])

//IIFE function
let prime1=[];
(function (arr6){
    for(let i=0; i<arr6.length; i++){
        prime1.push(arr6[i])
    }
    return prime1
})
([3,5,7,11,13,17,19])

//e) Return all the palindromes in an array
//annonymous function
let sum2=[];
let pal=function (arr7){
    for( let i=0; i<arr7.length; i++){
        sum2.push(arr7[i])
    }
    return sum2
}
pal(["tat","dad","madam","radar","civic"])

//IIFE function
let sum3=[];
(function (arr8){
    for(let i=0; i<arr8.length; i++){
        sum3.push(arr8[i])
    }
    return sum3
})
(["tat","dad","madam","radar","civic"])


//f) Return median of two sorted arrays of the same size.
// anonymous function
let findMedianAnonymous = function (nums1, nums2) {
    let mergedArray = nums1.concat(nums2); 
    mergedArray.sort((a, b) => a - b); 
    const n = mergedArray.length;
    const mid = Math.floor(n / 2);

    if (n % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
};

//  IIFE function
let findMedianIIFE = (function (nums1, nums2) {
    let mergedArray = nums1.concat(nums2); // merge the two arrays
    mergedArray.sort((a, b) => a - b); // sort the merged array

    const n = mergedArray.length;
    const mid = Math.floor(n / 2);

    if (n % 2 === 0) {
        // if the length of the merged array is even
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        // if the length of the merged array is odd
        return mergedArray[mid];
    }
})([1, 3, 5], [2, 4, 6]);


//g) Remove duplicates from an array
// Anonymous function
let b1 = function (arr9) {
    let op = new Set(arr9);
    return op;
};
console.log(b1([2, 0, 3, 0, 5, 2].sort()));

// IIFE function
(function (arrays) {
    let op1 = new Set(arrays);
    console.log(op1);
})([2, 0, 3, 0, 5, 2]);

//h) Rotate an array by k times
// anonymous function
let rotateArrayAnonymous = function(arr, k) {
    const n = arr.length;
    k = k % n;
    const rotatedPart = arr.splice(n - k, k);
    arr.splice(0, 0, ...rotatedPart);
    return arr;
};

let array1 = [1, 2, 3, 4, 5];
let k1 = 3;
console.log("Rotated Array using anonymous function:", rotateArrayAnonymous(array1, k1));

// IIFE function
let rotatedArray = (function(arr, k) {
    const n = arr.length;
    k = k % n;
    const rotatedPart = arr.splice(n - k, k);
    arr.splice(0, 0, ...rotatedPart);
    return arr;
})([1, 2, 3, 4, 5], 3);

console.log("Rotated Array using IIFE:", rotatedArray);


//task 2=> Do the below programs in arrow functions.
//a) Print odd numbers in an array

let result3=[];
let odd2= (rra)=>{
    for(var i=0;i<rra.length;i=i+1){
        if(rra[i]%2!==0){
            result3.push(rra[i]);
        }
      }
      return result3;
    }
   console.log(odd2([15,18,23,14,17,24]));

//b) Convert all the strings to title caps in a string array
let stringArray1 = ["this is a string", "another example", "one more string"];
let titleCaps = (arr) => arr.map((str) =>
  str.split(' ').map((word) =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
);
let result = titleCaps(stringArray1);
console.log(result);


//c) Sum of all numbers in an array
let sum4=0;
let result4= (rra1)=>{
    for(let i=0; i<rra1.length; i++){
        sum4 += rra1[i]
    }
    return sum4;  
}
console.log(result4([2,2,2,2,2]))

//d) Return all the prime numbers in an array
let prime2=[];
let bc1=function (rra2){
    for(let i=0; i<rra2.length; i++){
        prime2.push(rra2[i])
    }
    return prime2;
}
bc1([3,5,7,11,13,17,19])

//e) Return all the palindromes in an array

let sum5=[];
let pal1=(arr7)=>{
    for( let i=0; i<arr7.length; i++){
        sum5.push(arr7[i])
    }
    return sum5
}
pal1(["tat","dad","madam","radar","civic"])




























































