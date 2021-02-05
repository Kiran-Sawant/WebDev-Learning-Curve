// Arrow functions allow us to write shorter function syntax:
// Arrow functions can use multiple line, but is generally used
// to define single line functions

// Conventionsl function
hello = function () {
    return "Hello world"
}

// Arrow function
hello = () => { return "Hello world"}

// Arrow function with parameter

hello = (name) => { return "Hello " + name}

//   In regular functions 'this' keyword represented the object
//that called the function, which could be the window, the document,
//a button or whatever.
//   With arrow functions the this keyword always represents the object
//that defined the arrow function.