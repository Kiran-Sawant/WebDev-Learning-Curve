// https://www.w3schools.com/js/js_dates.asp

//______________________ new Date() method________________________//
// returns a date object with current local date & time on browser.
// output: Date Wed Feb 03 2021 14:59:05 GMT+0530 (India Standard Time).
var d = new Date()

//_______________Creating predifined Date objects____________________//
// new Date(year, month, day, hours, minutes, seconds, milliseconds) method.
// creating a new Date object with specified parameters.
// months start from 0~11, therefore 09 = October.
var date = new Date(2018, 09, 20)

// new Date(milliseconds)
// creates Date object from passed UNIX timestamp.
var date = new Date(1612344162315)

// new Date("DateString")
// creates a Date object with the passed string.
var date = new Date("Febuary 3, 2021 11:13:00");

//______________Dispalying values______________//
// gives standard date output as a string.
date.toString()

// gives UTC time of the date.
date.toUTCString()

// gives standard date output as ISO specified string.
date.toISOString()

// returns Date portion as a string
date.toDateString()

// returns time portion as a string
date.toTimeString()