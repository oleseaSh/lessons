const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
let CityName = 'Bozen';
const APIKey = 'd4573c968916531f2db16825c3a3282f';
const CityRequest = `q=${CityName}&appid=${APIKey}`;

const city = document.querySelector('.city-name');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const image = document.querySelector('.image');
fetch(`${BASE_URL }${CityRequest}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
       city.innerText = `${data.name},${data.sys.country}`;
       temperature.innerHTML = `${Math.round(data.main.temp -273.15)}&deg;`;
       description.innerText = `${data.weather[0]['description']}`;
       image.innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png' />`;
    });

    const BASE_URL2 = 'https://api.openweathermap.org/data/2.5/weather?';
    let CityName2 = 'Lisbon';
    const APIKey2 = 'd4573c968916531f2db16825c3a3282f';
    const CityRequest2 = `q=${CityName2}&appid=${APIKey2}`;

const city2 = document.querySelector('.city-name2');
const temperature2 = document.querySelector('.temperature2');
const description2 = document.querySelector('.description2');
const image2 = document.querySelector('.image2');
fetch(`${BASE_URL2}${CityRequest2}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        city2.innerText = `${data.name}, ${data.sys.country}`;
        temperature2.innerHTML = `${Math.round(data.main.temp - 273.15)}&deg;C`;
        description2.innerText = `${data.weather[0]['description']}`;
        image2.innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png' />`;
    });

    const BASE_URL3 = 'https://api.openweathermap.org/data/2.5/weather?';
    let CityName3 = 'Naples';
    const APIKey3 = 'd4573c968916531f2db16825c3a3282f';
    const CityRequest3 = `q=${CityName3}&appid=${APIKey3}`;
    
    const city3 = document.querySelector('.city-name3');
    const temperature3 = document.querySelector('.temperature3');
    const description3 = document.querySelector('.description3');
    const image3 = document.querySelector('.image3');
    fetch(`${BASE_URL3 }${CityRequest3}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
           city3.innerText = `${data.name},${data.sys.country}`;
           temperature3.innerHTML = `${Math.round(data.main.temp -273.15)}&deg;`;
           description3.innerText = `${data.weather[0]['description']}`;
           image3.innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png' />`;
        });
    
        const BASE_URL4 = 'https://api.openweathermap.org/data/2.5/weather?';
        let CityName4 = 'Catania';
        const APIKey4 = 'd4573c968916531f2db16825c3a3282f';
        const CityRequest4 = `q=${CityName4}&appid=${APIKey4}`;
    
    const city4 = document.querySelector('.city-name4');
    const temperature4 = document.querySelector('.temperature4');
    const description4 = document.querySelector('.description4');
    const image4 = document.querySelector('.image4');
    fetch(`${BASE_URL4}${CityRequest4}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            city4.innerText = `${data.name}, ${data.sys.country}`;
            temperature4.innerHTML = `${Math.round(data.main.temp - 273.15)}&deg;C`;
            description4.innerText = `${data.weather[0]['description']}`;
            image4.innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png' />`;
        });
    
     