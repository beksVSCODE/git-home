//!1

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// console.log(arr1.concat(arr2));

//!2
// let arr = [1,2,3]
// console.log(arr.reverse());

//!3
// let arr = [1,2,3]
// arr.push(4,5,6)
// console.log(arr);

//!4
// let arr = [1,2,3]
// arr.unshift(4,5,6)
// console.log(arr);

//!5
// let arr =  ['js', 'css', 'jq']
// console.log(arr[0]);

//!6
//?если это нужно сделать с помощью метода массива то
// let arr =  ['js', 'css', 'jq'];
// let arr2 = arr.shift()
// console.log(arr2);

//!6
//?и здесь тоже самое
// let arr =  ['js', 'css', 'jq'];
// let arr2 = arr.pop()
// console.log(arr2);

//!7
// let arr = [1,2,3,4,5]
// let arr2 = arr.slice(0,3)
// console.log(arr2);

//!8
// let arr = [1,2,3,4,5]
// let arr2 = arr.slice(3,5)
// console.log(arr2);

//!9 
// let arr = [1, 2, 3, 4, 5]
// arr.splice(0,5,1,4,5)
// console.log(arr);

//!10
// let arr = [1, 2, 3, 4, 5]
// let arr2 = arr.splice(1,3)
// console.log(arr2);

//!11
// let arr = [1,2,3,4,5]
// arr.splice(3,0,'a','b','c')
// console.log(arr);

//!12
// let arr = [1,2,3,4,5]
//? первый способ
// arr.splice(1,0,'a','b')
// arr.splice(6,0,'c')
// arr.splice(8,0,'e')
//? второй способ

// arr.splice(0,5,1, 'a', 'b', 2, 3, 4, 'c', 5, 'e')

// console.log(arr);