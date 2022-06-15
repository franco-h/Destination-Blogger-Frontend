let createForm = document.querySelector('.create-article-form');

let destination = document.querySelector('#destination');
let location2 = document.querySelector('#location');
let image = document.querySelector('#image');
let description = document.querySelector('#description');

createForm.addEventListener('submit', function(e) {
    e.preventDefault();

    fetch('https://destination-blogger.herokuapp.com/posts', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            destination: destination.value,
            location: location2.value,
            description: description.value,
            image: image.value,
        })
    }).then(res => res.text()).then(data => window.history.go);
});
