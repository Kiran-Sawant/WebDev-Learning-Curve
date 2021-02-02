//____________Syntax:______________//
// function name(params) {
    // code block
// }

// Defining a function
function hello() {
    console.log("Hello world!")
}

hello()             // calling the function.
k = hello           // assigning a function.

// setting parameters & passing arguments
// name is a parameter
function helloYou(name) {
    console.log("Hello " + name)
}

// Kiran is an argument
helloYou("Kiran")

// Function with two parameters
function helloYou(num1, num2) {
    console.log(num1 + num2)
}

helloYou(2, 5)

// Default value parameters (kwargs in python)
function helloSomeone(name="Frankie") {
    console.log("Hello " + name)
}

helloSomeone()

// Returning Values
function formal(name="Sam", title="Sir") {
    // console.log(title+" "+name)
    return title+" "+name
}

formal()

//___________________Scopes in JavaScript______________________//
//  The variables inside of a function are local to that function.
// If you mention a variable defined outside a function the program
// will look for it in the global scope and allow you to read it,
// but if you modify the value, it will create a new variable inside
// the functions scope and the value of the variable at the global
// scope will be preserved.


// Global variables
var v = " GLOBAL V"
var stuff = "GLOBAL STUFF"

function fun(stuff) {
    console.log(v)
    // console.log(stuff)
    // Changing stuff at the local level.
    stuff = "Reassign stuff inside fun"
    console.log(stuff)
}

fun()
console.log(stuff)          // Global var stuff is not affected.