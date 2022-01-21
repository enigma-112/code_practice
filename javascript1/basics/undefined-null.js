// undefined for variable
let temp

if(temp === undefined){
    console.log("Yes it is undefined !")
} else{
    console.log("Actually it is already defined")
}

// undefined for function arguments

let fun1 = function(num){
    console.log(num)
}

fun1()

// undefined for returned value

let x = fun1(3)
console.log(x)

// explicitly assign a variable undefined
let age = 27
age = undefined
console.log(age)

// null as assigned value

let address = null
console.log(address)