let createForm = document.querySelector('.create-article-form');

let destination = document.querySelector('#destination');
let location = document.querySelector('#location');
let image = document.querySelector('#image');
let description = document.querySelector('#description');


createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append('destination', destination.value);
    data.append('location', location.value);
    data.append('description', createdescription);
    data.append('description', description.value);

    fetch('https://destination-blogger.herokuapp.com/posts', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            destination: destination.value,
            location: location.value,
            description: description.value,
            image: image.value,

        })
    }).then(res => res.text()).then(data => console.log(data));
});
