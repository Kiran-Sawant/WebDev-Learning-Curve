var fruits = ["Mango", "Apple", "Orange", "Banana"]

// converts an array to a string where each element is separated by commas.
string = fruits.toString()

// converts an array to a string where each element is separated by passed separator.
join = fruits.join(" / ")

// removes the last element in an array & assigns it to variable
pop = fruits.pop()

// pushes the passed value to the end.
fruits.push("Kiwi")

// removes the first element in an array & assigns it to variable
shift = fruits.shift()

// pushes the passed value to the start.
fruits.unshift("Orange")

// repalaces the value at passed index with assigned value
fruits[0] = "Grapes"

// splice inserts the passed values from the passed index
// it takes index to start from, number of values to remove, new values.
fruits.splice(2, 0, "Guawa", "Tomato")

// .splice method can also be used to remove values.
fruits.splice(2, 1)

var vegitables = ["Eggplant", "Spenach", "Potato"]

// concatinating fruits with vegitables
// returns a new array, preservs old array(fruits)
var fru = fruits.concat(vegitables)

// returns a new array starting from first index to second index(not inclusive)
fruits.slice(1, 3)

// sorts the array alphabetically
fruits.sort()

// reverses the order of the array
fruits.reverse()