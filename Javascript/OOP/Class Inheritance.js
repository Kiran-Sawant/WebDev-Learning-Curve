class Book {

    constructor(title, author, year) {
        this.title = title.toString();
        this.author = author.toString();
        this.year = Number(year);
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in year ${this.year}`
    }

}

// Class magazine inherits from class Book
class Magazine extends Book {

    constructor(title, author, year, month) {
        super(title, author, year);

        this.month = month;
    }
}

// Creating an instance of Magazine
var mag1 = new Magazine("Vogue", "Bob", 2020, "February")

/* Magazine object can access methods defined in Book class even if
it is not defined in Magazine class*/
console.log(mag1.getSummary())