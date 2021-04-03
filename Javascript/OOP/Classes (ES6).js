/*
Class: Template for creating objects, All objects created using the same class will have same charecteristics.
Object: An instance of a class.
Instantiate: Creating an instance of a class.
Method: A function defined in a class.
Attribute: A variable bound to an instance of a class.*/

class Book {

    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // Do not use function keyword when creating methods inside classes
    getSummary() {
        return `${this.title} was written by ${this.author} in year ${this.year}`
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true
    }

    getAge() {
        const age = new Date().getFullYear() - this.year
        return age
    }

    // Creating a static method.
    // static methods can only be used by functions inside of class & cannot be called externally.
    static topBookStore() {
        return `Barns & Nobel`
    }
}

// Always remember to use 'new' key-word before creating a class instance
const book1 = new Book('Book One', "John Doe", 2019)