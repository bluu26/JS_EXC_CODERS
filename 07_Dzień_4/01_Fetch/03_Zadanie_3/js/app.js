const listRef = document.querySelector('#list');


const secretApiKey = 'e92601251-c0a2-4s63-v73f-54041195480f'
const urlHolidays = `https://fer-api.coderslab.pl/v1/holidays?key=${secretApiKey}&country=`;



function createFragment(name, dt){
    const liName = document.createElement('li');

    const h3Name = document.createElement('h3');
    h3Name.textContent = name;
    h3Name.classList.add('holiday-name');
    liName.appendChild(h3Name);

    const timeDt = document.createElement('time');
    timeDt.textContent = dt;
    timeDt.classList.add('holiday-time');
    liName.appendChild(timeDt);

    return liName;
}

function getData(url, countryCode){
    const request = fetch(url + countryCode, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    request
        .then((response) => response.json())
        .then((data) => {
            data.holidays.forEach((holiday) => {
                listRef.appendChild(createFragment(holiday.name, holiday.date));
            })
        });
}

getData(urlHolidays, 'PL');