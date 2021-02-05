// async makes a function return a Promise.
// await makes a function wait for a Promise.

function getPost() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post) => {output += `<li>${post.title}</li>`})
        // console.log(output)
    }, 1000)  
}

function createPost(post){
    setTimeout(() => {posts.push(post)}, 2000)
}

// async makes the function return a promise.
async function init() {
    // await makes the program wait for the function to complete.
    // await keyword can only be used inside an async function.
    await createPost({title: "Post 1", body: 'This is post 1'});

    getPost()
}