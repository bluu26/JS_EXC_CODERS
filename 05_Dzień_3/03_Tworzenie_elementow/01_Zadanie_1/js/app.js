const btnRefs = document.querySelectorAll('.btn');


btnRefs.forEach((btn) => {
    btn.addEventListener('click', function(event){
        // this.parentElement.parentElement.remove();
        this.closest('tr').remove();          //znajduje pierwsze trafienie wsrod wszystkich rodzicow
    });
})
