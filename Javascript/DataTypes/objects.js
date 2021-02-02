// Javascript objects are similar to python dictionaries/hash-maps.
// objects consists of key value pairs, where the keys are identifiers/variables
// and not Strings, wherelse the values can be of any datatype like strings,
// numbers, arrays, objects, etc.

var carInfo = {make: "Toyota", year: 1990, model: "Camry"}

//  The keys in objects are not strings, however when retriving values, pass
//the identifiers as strings.
maker = carInfo['make']

// Creatign a nested object.
var myObj = {a: "Maker", b: [1, 2, 3, 4], c: {a: "Killer", b: "Bean", c: "Forever"}}

// accessing nested values.
name_ = myObj[c][a] + " " + myObj[c][b]

