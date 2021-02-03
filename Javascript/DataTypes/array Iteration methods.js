var txt = ""
var numbers = [45, 4, 9, 69, 25]

//______________________.forEach()______________________________//
//  .forEach() executes the passed function passing each value
//in the array on at a time from left to right.
//  .forEach() can pass three arguments, value, index & array.
numbers.forEach(forFunc)

function forFunc(value, index, array) {
    txt = txt + value
}

//_________________________ .map()____________________________//
// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.

var squares = numbers.map(mpFunc)

function mapFunc(value) {
    return value ** 2
}

//________________________ .filter()____________________________//
// The .filter() method creates a new array with array elements that pass a boolean test.
// If the function returns false for a value, It will not be added to the new array.

var above18 = numbers.filter(filterFunc)

function filterFunc(value) {
    // returns true if value above 18.
    return value > 18
}

//__________________________ .reduce()____________________________//
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array.

var reduced = numbers.reduce(reduFunc)

function reduFunc(temp, value) {
    return temp + value
}

//__________________________ .reduceRight()__________________________//
// The reduceRight() method is same as reduce, but opposite in direction.

// below code will apply numbers array from right to left.
var rightReduced = numbers.reduceRight(reduFunc)

//__________________________ .every()________________________________//
// .every() returns true if all the values in array pass a boolean test
// returns false if even one fails(false)

var allOver18 = numbers.every(everyFunc);

function everyFunc(value, index, array) {
  return value > 18;
}

//__________________________ .some()________________________________//
// .some() returns true if even one value in array pass a boolean test

var oneOver18 = numbers.some(someFunc);

function someFunc(value, index, array) {
  return value > 18;
}

//________________________ .indexOf()________________________________//
// returns the index of first occurence of passed value

var fruits = ["Apple", "Banana", "Chikoo", "Gwava", "Orange", "Apple"]

fruits.indexOf("Apple")

// returns the index of first occurence of passed value
fruits.lastIndexOf("Apple")

//________________________ .find()_________________________________//
// returns the first value in array that passed a boolean test.
var first = numbers.find(testFunc);

// returns the index of the first value in array that passed a boolean test.
var firstIndex = numbers.findIndex(testFunc);

function testFunc(value) {
  return value > 18;
}