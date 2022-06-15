// Contact the server and get the post
async function getPost() {
    // 
    return await fetch('https://destination-blogger.herokuapp.com/posts')
        .then((res) => res.json())
        .then((data) => data);
}

// Contact the server and get the contact request data
async function getContact() {
    return await fetch('https://destination-blogger.herokuapp.com/contacts')
        .then((res) => res.json())
        .then((data) => data);
}

// Display the console page
document.addEventListener('DOMContentLoaded', async () => {
    let posts = await getPost();
    let articles = document.querySelector('.articles-list tbody');
    // clear the table
    articles.innerHTML = '';
    // Use template literal to display the post
    posts.forEach((post) => {
        let postHTML = `
        <tr>
        <td>${post.id}</td>
        <td>${post.destination}</td>
        <td>${post.location}</td>
        <td><button class="btn btn-link p-0 text-decoration">Edit</button></td>
        <td><button class="btn btn-link p-0 text-decoration">Delete</button></td>
        </tr>
        `;
        articles.insertAdjacentHTML('beforeend', postHTML);
    })
});