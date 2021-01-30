// for loops are cyclic control statements with definite cycles.
// Syntax:
// for(initializing point; termination point; steping condition){
//      codeblock
//      }
// for loop will run the code block for the number of times determined by the conditions.

// ________________Simple for loop___________________ //
// Here, the for loop will start from 0, end at 9, skipping alternate values
//ie. it will cycle 5 times and at each cycle value of loop variabel(i) will
//incriment according to the condition.
for(i=0; i < 10; i+=2){
    console.log(i)
  }

// ________________for loop with array________________//
// Here, the loop runs for each item in array, where in each cycle loop variable
//takes the successive value in the array.
var a = [1, 2, 3, 4, 5, 6]

for(i of a){
    console.log(i)
}

// _________________for loops with objects________________//
// Here, the loop runs for each key in object, where in each cycle loop variable
//takes the successive key in the object.

var dict = {"killer": 1,
            "Bean": 2,
            "Forever": 56}

for (var i in dict) {
    console.log(i)              // printing keys
    console.log(dict[i])        // printing values
}