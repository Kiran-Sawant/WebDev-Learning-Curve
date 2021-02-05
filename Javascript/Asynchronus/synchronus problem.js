/*  In this script we try to mimic a blogging script.
    posts is an array of objects, each containing the title and body of blog posts as strings.
    getPost function creates a <li> of blog titles and logs them on the console, it takes
1 second for it to do that.
    createPost takes an object with title & body of a post and pushes it to the posts array,
it takes 2 second for it to do that*/

/*  The problem with this script is that javascript reads code line by line and does not
wait for a task to complete before moving ahead. On line 31 createPost() takes 2 seconds,
javascript runs the function and moves on to getPost() on line 33, which takes 1 second.
It logs the titles that are already in the array but not the one that is newly created as
it is still being executed.*/

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

function createPost(post){
    setTimeout(() => {posts.push(post)}, 2000)
}

createPost({title: 'Post Three', body: 'This is post 3'})

getPost()