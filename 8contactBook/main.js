let inputName = document.getElementById('name')
let inputNumber = document.getElementById('number')
let inputEmail = document.getElementById('email')
let inputBtn = document.getElementById('button')
let userPlace = document.getElementById('forUser')

class ContactBook {
    count = 0
    UserList = []
    constructor(name,number,email){
        this.name = name
        this.number = number
        this.email = email
    }
    showEmail(){
       this.count += 1
       this.UserList.push(this.name,this.number,this.email)
        localStorage.setItem(`${this.count}`,this.UserList)
        this.UserList = []
    }
  
    
}
const Todos = new ContactBook()

function check(){
    if(inputName.value !== '' && inputNumber.value !== ''  && inputEmail.value !== ''){
        Todos.name = inputName.value
        Todos.number = inputNumber.value
        Todos.email = inputEmail.value
        Todos.showEmail()
        console.log(Todos);
        inputName.value = ''
        inputNumber.value = ''
        inputEmail.value = ''
    }
}

inputBtn.addEventListener('click', check)



