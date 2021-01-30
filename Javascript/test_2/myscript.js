var firstName = prompt("Enter your first name: ")
var lastName = prompt("Enter your last name: ")

var age = Number(prompt("Enter your age: "))
var height = Number(prompt("Enter your height in cm: "))
var petName = prompt("Enter your pet name: ")

if (firstName[0] == lastName[0] && 20 < age <30 && height > 170 && petName[petName.length -1] == 'y') {
    console.log("Welcome comrade!")
} else {
    console.log("Nothing to see here!")
}
