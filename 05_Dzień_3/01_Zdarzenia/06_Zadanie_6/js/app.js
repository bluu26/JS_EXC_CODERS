const btnRefs = document.querySelectorAll('.box');


btnRefs.forEach((box) => {
    box.addEventListener('click', function (event) {
        this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    });
})