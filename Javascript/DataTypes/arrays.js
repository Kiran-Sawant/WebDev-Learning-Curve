// Ordered, mutable datastructure, capable of heterogenious data.
// Creating an array
countries = ['USA', 'Ching-Chong', 'Germany']

// replacing value at 1st index position with new value.
countries[1] = "Corona"

// array with mixed datatype
var mixed = [true, 20, "strnig"]

//_________array methods____________//
var myArr = ['one', 'two', 'three']

// removes last element from array and returns it.
var item = myArr.pop()

// inserts passed value to last position.
myArr.push("Killer")

// Getting last value.
myArr[myArr.length - 1]

// Nested arrays.
var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

//   A function that accepts up to three arguments.
// forEach calls the callbackfn function one time for
// each element in the array.
myArr.forEach(alert)