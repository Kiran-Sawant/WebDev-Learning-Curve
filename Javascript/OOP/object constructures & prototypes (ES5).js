// OOP ES5 way

var book1= {
    title: "Book one",
    author: "Killer Bean",
    year: "2011",
    getSummary: function() { 
        return `${this.title} was written by ${this.author} in the year ${this.year}`
    }
}

var book2= {
    title: "Book two",
    author: "Coffee Bean",
    year: "2016",
    getSummary: function() { 
        return `${this.title} was written by ${this.author} in the year ${this.year}`
    }
}


console.log(book1.getSummary())
console.log(Object.keys(book1))

/*    Above method for creating book objects is repetative.
A function can be defined for creating multiple Book objects.*/

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


// Creating Book objects.
book1 = Book('Book one', 'John Doe', '2014')
book2 = Book('Book two', 'Jane Doe', '2016')