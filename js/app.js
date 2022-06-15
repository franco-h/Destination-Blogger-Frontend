// Contact the server and get the post
async function getPost() {
    // 
    return await fetch('https://destination-blogger.herokuapp.com/posts')
        .then((res) => res.json())
        .then((data) => data)
        .catch(err => console.log(err))
}

// Contact the server and get the contact request data
async function getContact() {
    return await fetch('https://destination-blogger.herokuapp.com/contact')
        .then((res) => res.json())
        .then((data) => data);
}

// Display the console page
// TODO: Fetch images from API
document.addEventListener('DOMContentLoaded', async () => {
    let posts = await getPost();
    let articles = document.querySelector('.details');
    // clear the table
    articles.innerHTML = '';
    // Use template literal to display the post
    posts.forEach((post) => {
        let postHTML = `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${post.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${post.Destination}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        `;
        articles.insertAdjacentHTML('beforeend', postHTML);
    })
});
