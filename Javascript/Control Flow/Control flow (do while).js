// do while is same as a while loop, except the code block
// is executed before checking for condition and therefore the
// code block is executed at-least once even if the condition is not satisfied.

var k = 0

do{
    k += 1
}
while (k<500)

console.log(k)

// Here, the block is executed at least once.
var k2 = 600

do{
    k2 += 1
}
while (k<500)

console.log(k)