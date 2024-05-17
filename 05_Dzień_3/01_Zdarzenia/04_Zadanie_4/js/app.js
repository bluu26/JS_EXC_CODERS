const mainBtnRefs = document.querySelectorAll('.btn');
const counterRef = document.querySelector('.counter');


mainBtnRefs.forEach((btn) => {
    btn.addEventListener('click', function(event){
       let counter = parseInt(counterRef.innerText);
       counterRef.innerText = ++counter;
    });
})



