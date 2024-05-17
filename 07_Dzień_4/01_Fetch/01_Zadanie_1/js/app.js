const formRef = document.querySelector('form');
const inputRef = formRef.querySelector('[name="isbn"]');
const bookRef = document.querySelector('.book-info');


const url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'

function createTag(text) {
    const tag = document.createElement('h2');
    const textNode = document.createTextNode(text);

    tag.appendChild(textNode);

    return tag;
}

formRef.addEventListener('submit', function (event) {
    event.preventDefault();  //wylacz mi domysla obsluge tego zdarzenia // nie odsiwezy mi tak szybko forma

    if (inputRef.value.trim() !== '') {
        fetch(`${url}${inputRef.value}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data.items[0].volumeInfo.title);  // sprawdzamy sobie gdzie to wpisac
                const h2Tag = createTag(data.items[0].volumeInfo.title);
                bookRef.appendChild(h2Tag);
            });
    }

});