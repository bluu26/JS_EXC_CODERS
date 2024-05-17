const btnRefs = document.querySelectorAll('.btn');


btnRefs.forEach((btn) => {
    btn.addEventListener('click', function (event) {
        const counterRef = this.previousElementSibling.querySelector('.counter');
        counterRef.innerText = parseInt(counterRef.innerText) + 1;
    });
})
