let articleSection = document.querySelector(".articles-list");

articleSection.addEventListener('click', function(e) {
    if(e.target.classList.contains('remove-btn')) {
        let id = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch('https://destination-blogger.herokuapp.com/posts/' + id, {
            method: 'DELETE'
        }).then((res) => res.text())
        .then(() => window.history.go());
    }
})