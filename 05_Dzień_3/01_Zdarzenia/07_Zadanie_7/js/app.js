const boxRefs = document.querySelector('#box');
const globalXRef = document.querySelector('#globalX');
const globalYRef = document.querySelector('#globalY');

const localXRef = document.querySelector('#localX');
const localYRef = document.querySelector('#localY');


boxRefs.addEventListener('mousemove', function(event){
    // console.log(event); /// sczytuje sobie dane
    globalXRef.innerText = `${event.clientX}px`;
    globalYRef.innerText = `${event.clientY}px`;
    // console.log(event.clientX, event.clientY);
    // console.log(event.offsetX, event.offsetY)

    localXRef.innerText = `${event.offsetX}px`;
    localYRef.innerText = `${event.offsetY}px`;

});



// const boxRef = document.querySelector('#box');
// const globalXRef = document.querySelector('#globalX');
// const globalYRef = document.querySelector('#globalY');
//
//
//
//
// boxRef.addEventListener('mousemove', function (event) {
//     globalXRef.innerText = `${event.clientX}px`;
//     globalYRef.innerText = `${event.clientY}px`;
//
//
// });