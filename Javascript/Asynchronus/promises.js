/*  "Producing code" is code that can take some time.
    "Consuming code" is code that must wait for the result.
    A Promise is a JavaScript object that links producing code and consuming code.
    Promise Object contains the producing code and calls the consuming if there is
no error, else it sends an error message defined in the reject() method of Promise object.

    Here, createPost function returns a Promise object, that contains a functions that
returns nothing. It does some task and checks for error, if error; it will use reject method
and pass the error msg to function in .catch() method on line-46, if no error it will use the
.resolve() method, as the function returns nothing there is nothing to pass but it executes
the function in .then() method on line-46 (getPost). The resolve & reject must be inside the
.setTimeout() method for it to work. */

const posts = [
    {title: 'Post One', body: 'This is post 1'},
    {title: 'Post Two', body: 'This is post 2'}
]

function getPost() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post, index) => {output += `<li>${post.title}</li>`})
        console.log(output)
    }, 1000)
}

// Producing Code
function createPost(post){
    // Creating a promise object
    // Here, resolve is the function defined in .then() and reject is defined in .catch()
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            posts.push(post)

            const error = false;

            if (!error) {
                resolve()
            } else {
                reject('Error: Something went wrong')
            }
        }, 2000)
    })
}

// Consuming Code
createPost({title: 'Post Three', body: 'This is post 3'}).then(getPost).catch((error) => console.log(error))

//________________promise.all_____________//
const promise1 = Promise.resolve("Hello");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'good bue'));

Promise.all([promise1, promise2, promise3]).then((values) => console.log(values))