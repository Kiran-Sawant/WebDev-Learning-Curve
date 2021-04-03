/* Use keyword 'get' to create a getter method.
   Use 'set' keyword to create a setter method.
   getter & setter methods can be used to add functionalities or to ristrict functionalities.
   like not giving a getter to write only attributes & setter for read-only attributes. */

class Car {

    constructor(brand) {
      this._carname = brand;
    }

    //  The name of the getter/setter method cannot be the same as the name of the attribute,
    // programmers put an underscore before the attribute that is being accessed (_carname).
    get carname() {
      return `The car is of ${this._carname} brand.`;
    }

    set carname(x) {
      this._carname = x;
    }
  }
  
// Creating Car instance
let myCar = new Car("Ford");

// Resetting _carname attribute (setter)
myCar.carname = "Volvo";

// accessing _carname attribute (getter)
console.log(myCar.carname);