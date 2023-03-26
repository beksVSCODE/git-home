// //! Задание 1
// let year = 2023
// if(year> 2015){
//     console.log(year);
// }
// //! Задание 2
// let num = 10
// let num2 = 10
// if(num-num2){
//     alert(num-num2)
// }
// //! Задание 3
// let name = prompt("Какое «официальное» название JavaScript?")
// if("EcmaScript" == name){
//     alert("верно")
// }else {
//     alert("не верно")
// }
// //! Задание 4
// let a = +prompt('Введите число');
// let b = +prompt('Введите число');
// if (a + b === 10) {
//   alert(a + b);
// } else {
//   console.log(a + b);
// }

// //! Задание 5
// let c = confirm("Вам есть 18 ?")
// if(c==true){
//     alert("Добро Пожаловать");
// }else {
//     alert("Вход запрещен!");
// }

// //! Задание 6
// let js =  "Javascript"

// js == "Javascript" ? console.log("Frontend") : console.log("Backend");;


//!extra task
// let task = +prompt("number")

// if(task === 1 || task ===2 || (task === 12)){
//     console.log("зима");
// }else if(task === 3 || task ===5){
//     console.log("весна");
// }else if(task === 6 || task ===8){
//     console.log("лето");
// }else if(task === 9 || task === 11){
//     console.log("лето");
// }else {
//     console.log("нету");
// }

//!extra task 2

let name = prompt("Как тебя зовут?")

if(!name){
    alert("Вы отменили действие")
}else{
    let sure = confirm("Вы уверены?")
    if(sure){
        alert(` Ваше имя${name}`)
    }
}
