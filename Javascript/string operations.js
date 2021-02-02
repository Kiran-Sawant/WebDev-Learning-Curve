// https://www.w3schools.com/js/js_string_methods.asp

// string concatination
"Django" + "Is return in python"

// indexing
// indexing starts with 0 & includes spaces.
var k = "JavaScript"
k[2]

// .imedxOf returns the index of first occurence of the specified string
// here, it returns index of alphabet l in word "locate"
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

// returns index of alphabet e in first occurence of word locate.
pos = str.lastIndexOf("locate")

// starts locating from specified index in string.
pos = str.indexOf("locate", 15);

// same as .indexOf(), except it cannot take second argument.
// unlike indexOf(), .search() can take RegEx.
pos = str.search("locate")

// extracts a part of a string and returns the extracted part in a new string.
// end index is not included.
nStr = str.slice(7, 13)

// Extracts 6 charecters starting from 7th index position.
nStr = str.substr(7, 6)

// replaces the first occurence of first argument with second argument.
// returns a new string original string is preserved.
// method is case sensitive.
newStr = str.replace("locate", "Find")

// use RegEx followed by /i for non-case sensitivity
newStr = str.replace("/LOCATE/i", "Find")
// use RegEx followed by /g for replacing all occurences
newStr = str.replace("/LOCATE/g", "Find")

var naem = "    random string  "
// removes white-spaces around the string.
newStr = naem.trim()

// converting string to an array
// elements will be elements in string separated by passed separator
naemArry = naem.split("")