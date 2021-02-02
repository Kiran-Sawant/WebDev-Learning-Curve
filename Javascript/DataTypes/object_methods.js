// Functions can be defined inside of objects
// this keyword can be used to access the
//values inside of the object in which the function is defined (use this.key)

myObj = {firstName: "Killer",
         lastName : "Bean",
         fun: function func() {
    				console.log("Object function called")
        	},
         fun_2: function fun(){
           console.log("My name is " + this.firstName + " " +this.lastName)
         }}

myObj.fun()
myObj.fun_2() 