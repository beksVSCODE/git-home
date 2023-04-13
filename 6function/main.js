//! Задание 1

// function sumNumber (a,b){
//     return a + b
// }
// let num1 = 10
// let num2 = 30
// let result = sumNumber(num1,num2)
// console.log(result);

//! Задание 2

// function capitalLetter(str){
//     return str[0].toUpperCase() + str.slice(1)
// }

// let str = 'beka'
// let result = capitalLetter(str)
// console.log(result);

//! Задание 3

// function PlusOne (arr){
//     let resArr = []
//     for (let i = 0; i < arr.length; i++) {
//         resArr.push(arr[i] + 1)
//     }
//     return resArr
// }

// let array = [1,2,3,4,5]
// let result = PlusOne(array)
// console.log(result);

//! Задание 4

// function findSymbol (str,symbol){
//     let count = 0
//     for (let i = 0; i < str.length; i++) {
//         if(str[i] === symbol){
//              count +=1
//         }
        
//     }
//     return count

// }
// let string = 'jcnsdjcbbldsmcbdms'
// let result = findSymbol(string,'b')
// console.log(result);

//! Задание 5

// function sumArray (arr){
//     let resultArr = 0
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] % 3 === 0){
//             resultArr += arr[i]
//         }
        
//     }
//     return resultArr
// }
// let array = [1,2,3,4,5,6,9]
// let result = sumArray(array)
// console.log(result);

//! Задание 6

// function doubleLetter (a){
//     let strResult = ''
//     for (let i = 0; i < a.length; i++) {
//         strResult += a[i] + a[i]
        
//     }
//     return strResult

// }
// let name = 'beka'
// let result = doubleLetter(name)
// console.log(result);

//! Задание 7

// function changeOnZero (arr){
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//        if(arr[i] > 0){
//         newArr.push(arr[i])
//        }else {
//         newArr.push(arr[i]=0)
//        }
        
//     }
//     return newArr
// }
// let array = [1,2,-3,4,-5,-32,31]
// let result = changeOnZero(array)
// console.log(result);    

//! Задание 8

// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }
  

// let num = 5
// let result = isPrime(num)
// console.log(result);

//! Задание 9

// function doubleElem (arr){
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) { 
//          newArr.push(arr[i] * arr[i])
        
//     }
//     return newArr
// }
// let array = [1,2,3,4,5]
// let result = doubleElem(array)
// console.log(result);

//! Задание 10

// function checkTrue (arr){
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         for(let key in arr[i]){
//            if( key ==='completed' && arr[i][key] === true){
//             newArr.push(arr[i])
//            }
//         }
        
//     }
//     return newArr
// }

// let arrayObj = [
//     {completed:true},
//     {name:'Beka'},
//     {completed:true},
//     {completed:true},
//     {completed:true},
//     {completed:false},
//     {completed:true},
//     {age:true}
// ]
// let result = checkTrue(arrayObj)
// console.log((result));

//! Задание 11

// function Anagram (str1,str2){
//    let newArr = str1.concat(str2).split('')
//    const uniqueArr = Array.from(new Set(newArr))
//    if(uniqueArr.length === str1.length && uniqueArr.length === str2.length){
//         return true
//    }else {
//     return false
//    }

// }
// let firstStr = 'нитка'
// let secondStr = 'ткани'
// let result  = Anagram(firstStr,secondStr)
// console.log(result);


//! Задание 12

// function UniqueNum (arr1,arr2){
//     let allArr = arr1.concat(arr2);
//     const uniqueArr = Array.from(new Set(allArr))
//     return uniqueArr

// }

// let arr1 = [1,2,3,4,5]
// let arr2 = [1,2,3,4,5]
// let result = UniqueNum(arr1,arr2);
// console.log(result);

//! Задание 14

// function reverseEveryElement (arr){
//     let array = []
//    for (let i = 0; i < arr.length; i++) {
//     array.push(arr[i].split('').reverse().join(''))
//    }
//    return array
// }

// let arrStr = ['BMW','Mercedes-Benz','Toyta','Lexus']
// let result = reverseEveryElement(arrStr)
// console.log(result);