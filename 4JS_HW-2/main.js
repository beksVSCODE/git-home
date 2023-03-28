//! Задание 1
// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

//! Задание 2

// for (let i = 11; i <= 33 ; i++) {
//     console.log(i);
    
// }

//! Задание 3

// for (let i = 0; i <= 100; i++) {
//     i%2==0 ? console.log(i) : false     
// }

//! Задание 4

// let result = 0
// for (let i = 0; i <= 100; i++) {
//     console.log(result = result + i);
    
// }

//! Задание 5

// let arr = [1, 2, 3, 4, 5]

// for(let elem of arr){
//     console.log(elem)
// }

//! Задание 6

// let arr = [1, 2, 3, 4, 5]
// let result = 0
// for(let elem of arr){
//     result += elem;
// }
// console.log(result);

//! Задание 7

// let arr = [2,5,9,15,0,4]

// for (let i = 0; i < arr.length; i++) {
//    if(arr[i]> 3 && arr[i]<10){
//     console.log(arr[i]);
//    }
// }
//?2 способ
// for (let i = 0; i < arr.length; i++) {
//     (arr[i]> 3 && arr[i]<10)?console.log(arr[i]) : false

// }

//! Задание 8

// let arr = [1,2,3,-42,4,0,-12,5]
// let result = 0
// for(let elem of arr){
//     if(elem>0){
//         result += elem
//     }
// }
// console.log(result);

//! Задание 9

// let arr = [1, 2, 5, 9, 4, 13, 4, 10]

// for(let elem of arr){
//     if(elem === 4){
//         console.log("Есть!");
//         break
//     }
// }

//! Задание 10

// let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
// let str = ''
// for(let elem of arr){
//     str = str + '-' + elem
// }
// console.log(str);

//! Задание *

// function elochka (num,value){
//     let str = ''
//     for (let i = 0; i < num; i++) {
//         console.log(str = str + value);
//     }
// }
// elochka(5,'#');
//? Здесь можно задавать количество столбцов и указывать любой знак