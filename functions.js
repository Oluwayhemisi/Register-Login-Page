function onboardStudent(studentObj, emailStudent){
    if(studentObj.firstName !== ""){
        console.log(`welcome to Semicolon ${studentObj.firstName}`);
        setTimeout(() => emailStudent(studentObj), 3000)
        console.log(`${studentObj.firstName}, check your email in the next 1 min for further instructions` )
    }else{
        

    }
}

let newStudent = {firstName: "mufasa", number:"+23480999966785"}

onboardStudent(newStudent, (student)=> {
    console.log(`Email by semicolon to ${student.firstName} with phoneNumber ${student.number}`)
})          


function dialNaijaCode(countryCode, number){
    console.log(`+234${countryCode} ${number}`)
}

function dialCustomer(customer, caller){
    if(customer.nationality === "nigeria"){
        caller("234",customer.phoneNumber)
    }
    else{
        setTimeout(() => caller("233",customer.phonenumber), 3000)
    }

    let customer = {nationality: "Nigeria", phonenumber: "8022228888"}
    dialCustomer(customer, dialNumber)
}