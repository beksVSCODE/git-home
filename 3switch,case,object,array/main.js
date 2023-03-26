//! Задание 1
// let a = +prompt("число")
// let b = +prompt("число2")


// switch (a + b) {
//     case 10:
//         alert('10')
//     break;
//     case 20:
//         alert('20')
//     break;
//     default:
//     alert('default')
// }
//! Задание 2
// let month = prompt("введите месяц")

// if(month == 'декабрь' ||month == 'январь' || month == 'февраль'){
//     alert('зима')
// }else if (month == 'март' ||month == 'апрель' || month == 'май'){
//     alert('весна')
// }else if (month == 'июнь' ||month == 'июль' || month == 'август'){
//     alert('лето')
// }else if(month == 'сентябрь' ||month == 'октябрь' || month == 'ноябрь'){
//     alert('осень')
// }else {
//     alert("введите корректно месяц")
// }
//! Задание 3
// let age = prompt('Введите свой возраст')

// if(age == 6 || age == 7){
//     alert("Первоклассник");
// }else if (age>=8 && age<=10){
//     alert("ученик из начальной школы");
// }else if (age>=11 && age<=13){
//     alert("ученик из средней школы");
// }else if (age>=14 && age<=16){
//     alert("ученик из старшей школы");
// }else {
//     alert("не ученик")
// }
//! Задание 4
// let obj = {
//     age:17,
//     firstName:'Beks',
//     lastName:'Beksultan'
// }
// console.log(obj.age);
// console.log(obj.firstName);
// console.log(obj.lastName);

//! Задание 5

// let arr = [1, 2, 3, 4, 5]
// console.log(arr[2]);

//! Задание 6

// let name = prompt('Имя')
// let surname = prompt('Фамилия')
// let age = prompt('Возраст')
// let object = {
//     'name-obj':name,
//     'surname-obj':surname,
//     'age-obj':age,
// }
// console.log(object);

//! Задание 7

// let value = prompt('Введите значение')
// let obj = {}
// let arr = []
// switch (value){
//     case 'Объект' : {
//         obj.value = value
//         console.log(obj);
//     }
//     break
//     case 'Массив' : {
//         arr[0] = value
//         console.log(arr);
//     }
//     break
//     default : {
//         alert('Введите значение Объект или Массив')
//     }
// }

//! Extra tasks part 1

// let object1 = {
//     value:5
// }
// let array1 = [5]

// if(object1.value == array1[0]){
//     alert('Значения равны')
// }else{
//     alert('Значения не равны')
// }

//! Extra tasks part 2

// let question =  confirm('"2+2 = 4?"')
//? Первый способ
// if(question==true){
//     let arr = ["Верно"]
//     console.log(arr[0]);
// }else {
//     let obj = {
//         isTrue:"Неверно"
//     }
//     console.log(obj.isTrue);
// }
//? Второй способ
// switch (question){
//     case true : 
//     let arr = ["Верно"]
//     console.log(arr[0]);
//     break;
//     default : {
//         let obj = {
//             isTrue:"Неверно"
//         }
//         console.log(obj.isTrue);
//     }
// }