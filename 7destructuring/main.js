//! Задание 1

// let person = {
//     name:'Beka',
//     age:17,
//     city:'California'
// }
// const { name:personName,city:personCity,age:personAge} = person

// console.log(personName); 
// console.log(personAge);
// console.log(personCity);
//! Задание 2

// let arr = [
//     {name:'Aidar',age:20},
//     {name:'Dima',age:18},
//     {name:'Uluk',age:21},
//     {name:'Somebody',age:21},
// ]

// const [ {name:firstName,age:firstAge}] = arr
// console.log(firstName,firstAge);
//сразу деструктуризировал элемент

//! Задание 3

// let obj = {
//     numbers:[1,2,3,4,5]
// }

// const { numbers:[firstNum,secondNum]} = obj
// console.log(firstNum,secondNum);

//! Задание 4

// let person = {
//     name:'Beka',
//     age:17
// }
// const { name:newName } = person

// let newPerson = {
//     newName
// }
// console.log(newPerson);

//! Задание 5

// let getKey = (obj) => {
//     const { name,age,city } = obj
//     return [name,age,city]
// }

// let person = {
//     name:'Beka',
//     age:17,
//     city:'Tokyo'
// }
// console.log(getKey(person));

//! Задачи со spread оператором

//! Задание 1

// let numbers = [1,2,3]
// let numbers2 = [4,5,6]
// let allNumbers = [...numbers,...numbers2]
// console.log(allNumbers);

//! Задание 2

// let person = {
//     name:'Beka',
//     age:17,
// }
// let person2 = {
//     city:'Tokyo',
//     gender:'djncsjk',
// }
// let newPerson = {
//    ...person,
//    ...person2
// }
// console.log(newPerson);

//! Задание 3

// let fn = (arr) => {
//     let newArr = [...arr,0]
//     return newArr
// }

// let number = [1,2,3,4,5]
// console.log(fn(number));

//! Задание 4

// let person = {
//     name:'Beka',
//     age:17,
// }
// let newPerson = {
//     ...person,
//     city:'Tokyo'
// }
// console.log(newPerson);

//! Задание 5

// let fn = (obj) => {
//     return {...obj}
// }
// let person = {
//     name: 'Beka',
//     age: 17,
//     city: 'Tokyo'
// }
// console.log(fn(person));

//! Задачи, комбинирующие деструктуризацию и spread оператор

//! Задание 1

// let person = {
//     name: 'Beka',
//     age: 17,
//     city: 'Tokyo'
// }
// const { city,...otherKey } = person
// let newPerson = {
//     ...otherKey
// }
// console.log(newPerson);

//! Задание 2

// let numbers = [1,2,3,4,5]
// const [ elem1,_,...otherElem ] = numbers
// let newArr = [elem1,...otherElem]
// console.log(newArr);

//! Задание 3

// let person1 = {
//     name: 'Beka',
//     age: 17,
// }
// let person2 = {
//     city:'Tokyo',
//     gender:'nobody'
// }
// const { age,...otherElem } = person1
// let newPerson = {
//     ...otherElem,
//     ...person2
// }
// console.log(newPerson);

//! Задание 4

// let person = {
//     name: 'Beka',
//     age: 17,
// }
// let hobbies = ['football','table tennis','play guitar']
// const [ ...allElem ] = hobbies
// let newPerson = {
//     ...person,
//     hobbies:allElem,
// }
// console.log(newPerson);

//! Задание 5

// const fn = (obj) => {
//     const { ...keys } = obj
//     keys['Country'] = 'USA'
//     return keys
// }
// let person = {
//     name: 'Beka',
//     age: 17,
//     city:'Tokyo',
// }
// console.log(fn(person));