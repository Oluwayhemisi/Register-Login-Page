function palindrome(number){
    let answer = ""
    
let firstNumber = number/10000
Math.floor(firstNumber)
console.log(firstNumber)

let secondNumber = (number % 10000) / 1000
console.log(secondNumber)
Math.floor(secondNumber)


let thirdNumber = (number % 1000) / 100
Math.floor(thirdNumber)
console.log(thirdNumber)

let fourthNumber = (number % 100) / 10
Math.floor(fourthNumber)
console.log(fourthNumber)

let fifthNumber = number % 10
Math.floor(fifthNumber)
console.log(fifthNumber)

if(firstNumber === fifthNumber && secondNumber === fourthNumber){
    return "This is a palindrome"
}else{
   return "this is not a parlindrome"
}
    
}
console.log(palindrome(12321))