let userInput = {
    email: "",
    password: ""
}
document.getElementById("email").addEventListener("keyup", (e) =>{
    userInput[e.target.name] = e.target.value
})

document.getElementById("password").addEventListener("keyup", (e) => {
    userInput[e.target.name] = e.target.value
})

function clickHandler(){
    console.log(userInput)
}

function store() {
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);

}
