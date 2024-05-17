const parentRefs = document.querySelectorAll('.parent');


parentRefs.forEach((parent) => {
    parent.addEventListener('mouseenter', function(event){
        this.firstElementChild.style.display = 'block';
    });

    parent.addEventListener('mouseleave', function(event) {
        event.target.firstElementChild.style.display = 'none';
    })
})
