{
    let articleSection = document.querySelector(".articles-list");
    let editBtn = document.querySelector('#v-pills-edit-post-tab');
    let editForm = document.querySelector('.edit-article-form');

    let destinationInfo = document.querySelector('#edit-destination');
    let locationInfo = document.querySelector('#edit-location');
    let imageInfo = document.querySelector('#edit-image');
    let descriptionInfo = document.querySelector('#edit-description');
    let id;
    
    
    articleSection.addEventListener('click', async function(e) {
        if(e.target.classList.contains('edit-btn')) {
            id = e.target.parentNode.parentNode.querySelector('.id').value;
            let articleInfo = await fetch('https://destination-blogger.herokuapp.com/posts/' + id)
            .then(res => res.json())
            .then(data => data)

            destinationInfo.value = articleInfo.destination;
            locationInfo.value = articleInfo.location;
            imageInfo.value = articleInfo.image;
            descriptionInfo.value = articleInfo.description;

            editBtn.click();
        }
    })

    editForm.addEventListener('submit', function(e) {
        e.preventDefault();

        fetch('https://destination-blogger.herokuapp.com/posts/' + id, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                destination: destinationInfo.value,
                location: locationInfo.value,
                description: descriptionInfo.value,
                image: imageInfo.value,
            })
        }).then(res => res.text()).then(() => window.history.go());
    });
}