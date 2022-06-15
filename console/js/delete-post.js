{
    let postBlock = document.querySelector('.post-list');

    postBlock.addEventListener('click', function(e) {
        if(e.target.classList.contains('remove-btn')) {
            let id = e.target.parentNode.parentNode.querySelector('.id').value;
            fetch('http://localhost:3000/posts/' + id, {
                method: 'DELETE'
            }).then((res) => res.text())
            .then(() => window.history.go());
        }
    })
}