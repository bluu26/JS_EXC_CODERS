const country = {
    capital: 'warsaw',
    population: '38000000',
    president: 'Andrzej',
    ministers: ['ziobro', 'tusk', 'szydlo', 'sasin']
}

const name = 'population'
console.log(country.capital);
console.log(country[name]); // pobieramy wartosc klucza
console.log(Object.keys(country));   // klucze
console.log(Object.values(country));  // wartosci
console.log(Object.entries(country)); // klucze i wartosci
