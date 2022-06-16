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
    let index = 1;
    // Use template literal to display the post
    posts.forEach((post) => {
        let postHTML = `
        <tr>
        <td>${index++}<input class="id" type="hidden" value="${post.id}"></td>
        <td class="destination">${post.destination}</td>
        <td class="location">${post.location}</td>
        <td><button class="edit-btn btn-link p-0 text-decoration-none">Edit</button></td>
        <td><button class="remove-btn btn btn-link p-0 text-decoration-none">Delete</button></td>
        </tr>
        `;
        articles.insertAdjacentHTML('beforeend', postHTML);
    })

    // Create articles
    let addPostBtn = document.querySelector('.add-post');
    let createPostBtn = document.querySelector('#v-pills-add-post-tab');
    addPostBtn.addEventListener('click', () => createPostBtn.click());
});