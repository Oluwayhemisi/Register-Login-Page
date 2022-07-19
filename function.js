const square = function(x){
    return x * x;
}
console.log(square(12));


const makeNoise = function(){
    console.log("pling!");
};
makeNoise();

const power = function(base, exponent){
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}
console.log(power(2,10))


const halve = function(n){
    return n/2
}

console.log(halve(100))

function greet(who){
    console.log("Hello "+ who)
}
greet("Harry")
console.log("Bye")





function multiply(x){
    let p = x * 2
    return p
}

function printOut(param){
    console.log(multiply(param))
}
printOut(2)


const handleClick = (aFunction)=>{
    let x = 2
    aFunction(x)
}
handleClick((e)=> console.log(e))