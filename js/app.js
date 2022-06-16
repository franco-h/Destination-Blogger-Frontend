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
    return await fetch('https://destination-blogger.herokuapp.com/contacts')
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
        <img class="card-img-top" src="${post.image}" alt="${post.destination}">
        <div class="card-body">
          <h5 class="card-title">${post.destination}</h5>
          <p class="card-text">${post.description}</p>
          <a href="./detail.html" class="btn btn-primary">Details</a>
        </div>
      </div>
        `;
        articles.insertAdjacentHTML('beforeend', postHTML);
    })
});



let contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Check if the email is valid before fetching the data
    let email = document.querySelector('#email').value;
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
        alert('Please enter a valid email');
        return;
    } else {
        // Fetch the data
        let data = {
            name: document.querySelector('#name').value,
            email: document.querySelector('#email').value,
            message: document.querySelector('#message').value
          }
        fetch('https://destination-blogger.herokuapp.com/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.text()).then(data => console.log(data));
    }
});
