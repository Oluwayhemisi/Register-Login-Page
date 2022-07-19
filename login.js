
let userInput ={
    email: "",
    password: ""
}

document.getElementById("email").addEventListener("input", (e) =>{
    userInput[e.target.name] = e.target.value
})

document.getElementById("password").addEventListener("input", (e) => {
    userInput[e.target.name] = e.target.value
})

function clickHandler(){
    console.log(userInput)
}


function clickHandler(){
    let {email, password} =userInput
    let user = {};
    if (email === "" || password === ""){
        alert("please enter your details")
        return
    }
    else{
        if(localStorage.getItem("users")){
            let users = JSON.parse(localStorage.getItem("users"))
            
            for(let i = 0; i<users.length; i++){
                if (users[i].email === email){
                    user = users[i];
                }
            }
            if(Object.keys(users).length > 0){
                if(user.password === password){
                    alert("Welcome to norbs event")
                    return
                }
                else{
                alert("Please enter a correct password")
                return
            }
            }
            else{
                alert("please enter a valid email address")
            }
        }else{
            alert("Register a user")
            return
        }
    }
    console.log(userInput)
    
}