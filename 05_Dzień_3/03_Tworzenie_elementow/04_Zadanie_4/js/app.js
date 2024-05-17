// promise based


const request = fetch('https://');

request
    .then((response) => response.json())
    .then((data) => console.log(data.rates[0].mid));