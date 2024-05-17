const btnRef = document.querySelector('#add');
const listRef = document.querySelector('#menu');
const liRef = listRef.firstElementChild;



function createTag(counter, total) {
    const tag = document.createElement('li');
    const text = document.createTextNode(`Element ${counter} -  ${total} elementow `);

    tag.appendChild(text);
    tag.classList.add('list-group-item');

    return tag;
}

function cloneTag(counter, total) {
    const tag = liRef.cloneNode(true);
    tag.innerText = `Element ${counter} -  ${total} elementow `;
    return tag;
}

btnRef.addEventListener('click', function(event) {
    const total = listRef.children.length;
    listRef.appendChild(createTag(total + 1, total));
});

////      create tag // clone tag // dzialaja tak samo!!









