// addition
// alert pops a messagebox on browser
alert(5 + 5)

// subtraction
alert(5 - 5)

// multiplication
alert(5 * 5)

// Division
alert(5 / 5)

// modulo, returns a remainder for rational quotiant, eg: 5%4 = 1
alert(5 % 5)

// power
alert(5 ** 5)

//___________numerical methods_____________//
var x = 2.456789

// .toFixed() returns a string, with the number written with a specified number of decimals
x.toFixed(3)

// toPrecision() returns a string, with a number written with a specified length:
x.toPrecision(4)

// here, y is a string
var y = prompt("Enter a number: ")

var k = Number(y)           // converts strings to number.

var k = parseInt(y)         // searches for first occurence of int in a string & stores it as number.

var k = parseFloat(y)       // searches for first occurence of float in a string & storres it as mnumber.