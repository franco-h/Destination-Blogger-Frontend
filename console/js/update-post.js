{
    let postBlock = document.querySelector('.post-list');
    let updateBtn = document.querySelector('#v-pills-update-post-tab');
    let updateForm = document.querySelector('.update-post-form');
    let id;

    let destinationInput = document.querySelector('#update-destination');
    let locationInput = document.querySelector('#update-location');
    let descriptionArea = document.querySelector('#update-description');

    postBlock.addEventListener('click', async function(e) {
        if(e.target.classList.contains('edit-btn')) {
            id = e.target.parentNode.parentNode.querySelector('.id').value;
            let postInfo = await fetch('http://localhost:3000/posts/' + id)
                .then((res) => res.json())
                .then((data) => data)
            destinationInput.value = postInfo.destination;
            locationInput.value = postInfo.location;
            descriptionArea.value = postInfo.description;

            updateBtn.click();
        }
    })

    updateForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let updateDescription;
        if(descriptionArea.value.indexOf('.') === -1) {
            updateDescription = descriptionArea.value;
        } else {
            updateDescription = descriptionArea.value.substring(0, descriptionArea.value.indexOf('.') + 1);
        }
        fetch('http://localhost:3000/posts/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                destination: destinationInput.value,
                location: locationInput.value,
                description: descriptionArea.value,
                description: updateDescription
            })
        }).then((resp) => resp.description()).then(() => window.history.go());
    })
}