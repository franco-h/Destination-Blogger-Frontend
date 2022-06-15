let createForm = document.querySelector('.create-post-form');
let destination = document.querySelector('#destination');
let location = document.querySelector('#location');
let description = document.querySelector('#description');


createForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let data = new FormData();
    data.append('destination', destination.value);
    data.append('location', location.value);
    data.append('description', createdescription);
    data.append('description', description.value);

    fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: data
    }).then((res) => res.description()).then((data) => window.history.go());

});
