// Switch case is used for strict comparisons/Specific comparison.
// switch keyword is followed by a parenthesis that containes a value to compare, it can be a variable or a statement.
// following code block contains multiple case keywords followed by exact possible values of the variable passed.
// If the case matches, the code block in that case is executed, and program breaks out of the switch block.
// break keyword is required after every case block
// If none of the case matches, program selects default block, if no default defined, the program moves beyond switch
// Switch cases use strict comparison (===). The values must be of the same type to match.

var age = prompt("Choose any one: 'Banana', 'Mango', 'Orange'")
var votable

switch (age) {
    case 'Banana':
        votable = "Kela Kha"
        break;
    case 'Mango':
        votable = "Aam choos"
        break;
    case 'Orange':
        votable = "Cheel k kha"
        break;
    default:
        votable = "Bhookha mar!"
        break;
}

console.log(votable)

//________________Example_2:________________//
var text

// here, Date().getDay() returns a Number between 0~6:
switch (new Date().getDay()) {
    case 4:
    case 5:
      text = "Soon it is Weekend";
      break;
    case 0:
    case 6:
      text = "It is Weekend";
      break;
    default:
      text = "Looking forward to the Weekend";
}

//____________________Example_3_____________________//
// We can make multiple cases to use same sode block.

var txt

switch (new Date().getDay()) {
    case 4:
    case 5:
      txt = "Soon it is Weekend";
      break;
    case 0:
    case 6:
      txt = "It is Weekend";
      break;
    default:
      txt = "Looking forward to the Weekend";
}