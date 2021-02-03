//_________Comparison operators____________//

// Greater than Operator
3 > 2;
2 > 3;

// Less than Operator
2 < 13;

// Greater than Equal to Operator
10 >= 5;

// Less than Equal to Operator
12 <= 15;

//__________Equality Operators____________//
// Magnitude equality, checks if the magnitude is equal regardless of variable type

2 == "2";
2 == 2;

2 != 5;

// Magnitude and type equality & inequality
2 === "2";
2 !== "2";

// behavior with NaN, undefined and NaN 
null == undefined;  // true
NaN == NaN;         // false (One non-number might not be equal to another non-number)

// and & or operator

1 == "1" && 2 == "2";           // and operator
1 == "12" || 2 == "2";          // or operator

// Ternary Operator (?)
// A conditional operator that assigns a value to a variable based on some condition.
// Syntax: var = (some condition) ? 

age = Number(prompt("Enter age")) ? "Value if true":"Value if false"

var votable = (age < 18) ? "Too Young":"Old Enough"