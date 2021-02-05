// Constructor for Book objects(ES5)
function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    this.getSummary = function() { 
        return `${this.title} was written by ${this.author} in the year ${this.year}`
    }
}

/*_________prototype methods (ES5)_______________/
prototype methods can be applied to book objects,
however theyt are not a part of book object themselves*/
Book.prototype.age = function () {
    const age = new Date().getFullYear() - this.year
    return age
}

// Creating Magazine, that inherits from Book
// Magazine constructor
function Magazine(title, author, year, month) {
    // .call() takes the args passed to Magazine & passes them to Book
    Book.call(this, title, author, year)            // Inheritance

    this.month = month
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype)

// Use Magazine constructor
Magazine.prototype.constructor = Magazine


var mag_1 = new Magazine("Mag one", "John Doe", "2018", "Jan")

console.log(mag_1)