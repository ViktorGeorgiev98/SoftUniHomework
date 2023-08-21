// function attachEvents() {
//     const locationsUrl = 'http://localhost:3030/jsonstore/forecaster/locations';
//     const todayUrl = 'http://localhost:3030/jsonstore/forecaster/today/';
//     const upcomingUrl = 'http://localhost:3030/jsonstore/forecaster/upcoming/';
//     const conditionSymbols = {
//         Sunny: '\u2600', // ☀
//         'Partly sunny': '\u26C5', // ⛅
//         Overcast: '\u2601', // ☁
//         Rain: '\u2614'// ☂
//     }

//     const forcastEelement = document.getElementById('forecast');

//     function readResponse(respose) {
//         if (!respose.ok) throw new Error("Error");
//         return respose.json();
//     }

//     function fillTodayData(data) {
//         let forecast = document.querySelector('div.forecast');
//         if (forecast) {
//             forecast.remove()
//         }
//         forecast = ce('div', {className: 'forecasts'},
//             ce('span', {className: 'condition symbol'}, conditionSymbols[data.forecast.condition]),
//             ce('span', {className: 'condition'},
//                 ce('span', {className: 'forecast-data'}, data.name),
//                 ce('span', {className: 'forecast-data'}, `${data.forecast.low}°/${data.forecast.high}°`),
//                 ce('span', {className: 'forecast-data'}, data.forecast.condition)));

//         document.getElementById('current')
//             .appendChild(forecast);

//         forcastEelement.style.display = 'block'
//     }

//     function fillUpcomingData(data) {
//         let forecastInfo = document.querySelector('div.forecast-info');
//         if (forecastInfo) {
//             forecastInfo.remove()
//         }
//         forecastInfo = ce('div', {className: 'forecast-info'},
//             data.forecast.map(day =>
//                     ce('span', {className: 'upcoming'},
//                         ce('span', {className: 'symbol'}, conditionSymbols[day.condition]),
//                         ce('span', {className: 'forecast-data'}, `${day.low}°/${day.high}°`),
//                         ce('span', {className: 'forecast-data'}, day.condition)))
//             );


//         document.getElementById('upcoming')
//             .appendChild(forecastInfo);

//         forcastEelement.style.display = 'block'
//     }

//     function getDataFor(locationName) {
//         fetch(locationsUrl)
//             .then(readResponse)
//             .then(location => {
//                     const locationCode = location.find(x => x.name === locationName).code;
//                     fetch(todayUrl + locationCode)
//                         .then(readResponse)
//                         .then(fillTodayData);
//                     fetch(upcomingUrl + locationCode)
//                         .then(readResponse)
//                         .then(fillUpcomingData);
//                 }
//             )
//         return undefined;
//     }

//     function submitHandle() {
//         const locationName = document.getElementById('location').value;
//         const data = getDataFor(locationName);
//     }

//     document.getElementById('submit')
//         .addEventListener('click', submitHandle);
// }

// attachEvents();

// function ce(type, attributes, ...content) {
//     const result = document.createElement(type);

//     Object.entries(attributes || {})
//         .forEach(([attribute, value]) => {
//             if (isEventListener(attribute)) {
//                 result.addEventListener(attribute.substring(2).toLocaleLowerCase(), value);
//             } else {
//                 result[attribute] = value;
//             }
//         });

//     content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

//     content.forEach(e => {
//         if (isElement(e)) {
//             result.appendChild(e);
//         } else {
//             const node = document.createTextNode(e);
//             result.appendChild(node);
//         }
//     });

//     return result;

//     function isEventListener(attr) {
//         return attr.substring(0, 2).localeCompare('on') === 0;
//     }

//     function isElement(element) {
//         return typeof element != 'string' && typeof element != 'number';
//     }
// }


// function attachEvents() {
//     // get variables and elements
//     let startingUrl = 'http://localhost:3030/jsonstore/forecaster/locations';
//     const submitbutton = document.getElementById('submit');
//     const forecastTable = document.getElementById('forecast');
//     // const location = document.getElementById('location').value;


//     // main logic
//     // implement getWeather button logic
//     submitbutton.addEventListener('click', getWeather);
//     async function getWeather() {
//         // forecastTable.innerHTML = '';
//         document.getElementById('current').innerHTML = '';
//         document.getElementById('upcoming').innerHTML = '';
//         forecastTable.style.display = 'none';
//         let locationCode = '';
//         const location = document.getElementById('location').value;
//         console.log(location);
//         if (location == null || location == '') {
//             document.getElementById('current').textContent = 'Error';
//             return;
//         }
//         try {
//             const response = await fetch(startingUrl);
//             if (!response.ok) {
//                 throw new Error("Error");
//             }
//             const data = await response.json();
//             Object.values(data).forEach((loc) => {
//                 if (location === loc.name) {
//                     locationCode = loc.code;
//                 }
//             })
//             // console.log(`location code is ${locationCode}`);
//             if (locationCode === '') {
//                 return;
//             }
//              // implement current forecast
//             currentForecast(locationCode);
//             // implement next 3 days
//             getForecastNext3Days(locationCode);
//         } catch (e) {
//             console.log(e);
//             forecastTable.style.display = 'linear';
//             forecastTable.textContent = 'Error';
//         }
//     }


//     async function currentForecast(code) {
//         const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
//         try {
//             const response1 = await fetch(url);
//             if(!response1.ok) {
//                 throw new Error("Error");
//             }
//             const data1 = await response1.json();
//             // console.log(data1);
//             let location = data1.name;
//             let low = data1.forecast.low;
//             let high = data1.forecast.high;
//             let condition = data1.forecast.condition;
//             // console.log(location, low, high, condition);
//             // implement DOM tree logic
//             let todayForecastEl = createElementTodayForecast(location, low, high, condition);
//             forecastTable.style.display = '';
//             document.getElementById('current').appendChild(todayForecastEl);
//         } catch(e) {
//             console.log(e);
//             forecastTable.style.display = 'linear';
//             forecastTable.textContent = 'Error';
//         }
//     }

//     function createElementTodayForecast(location, low, high, condition) {
//         const pElement = document.createElement('p');
//         const locationEl = document.createElement('li');
//         locationEl.textContent = `Today's forecast for ${location}`;
//         const highEl = document.createElement('li');
//         highEl.textContent = `High: ${high}°`;
//         const lowEl = document.createElement('li');
//         lowEl.textContent = `Low: ${low}°`;
//         const condtionEl = document.createElement('li');
//         condtionEl.textContent = chooseCondition(condition);
//         pElement.appendChild(locationEl);
//         pElement.appendChild(highEl);
//         pElement.appendChild(lowEl);
//         pElement.appendChild(condtionEl);
//         return pElement;
//     }

//     function chooseCondition(condition) {
//         let currentCondition = '';
//         if (condition === 'Sunny') {
//             currentCondition = 'Lets go to the beach! It is sunny and warm outside!';
//         } else if (condition === 'Rainy') {
//             currentCondition = 'Weather is bad, its raining.'
//         }
//         return currentCondition;
//     }

//     async function getForecastNext3Days(code) {
//         let url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
//         try {
//             const response3 = await fetch(url);
//             if(!response3.ok) {
//                 throw new Error("Error");
//             }
//             const data3 = await response3.json();
//             console.log(data3);
//             let location3 = data3.name;
//             let low3 = data3.forecast.low;
//             console.log(low3);
//             let high3 = data3.forecast.high;
//             console.log(high3)
//             let condition3 = data3.forecast.condition;
//             // console.log(location, low, high, condition);
//             // implement DOM tree logic
//             let upcomingForecast = createElementTodayForecast(location3, low3, high3, condition3);
//             forecastTable.style.display = '';
//             document.getElementById('upcoming').appendChild(upcomingForecast);

//         } catch(e){
//             console.log(e);
//         }
//     }
// }

// attachEvents();

function attachEvents() {
    const locationInput = document.getElementById('location');
    const submitButton = document.getElementById('submit');
    const forecastDiv = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');
  
    submitButton.addEventListener('click', () => {
      const locationName = locationInput.value;
  
      fetch('http://localhost:3030/jsonstore/forecaster/locations')
        .then(response => response.json())
        .then(data => {
          const location = data.find(item => item.name === locationName);
  
          if (!location) {
            throw new Error('Location not found');
          }
  
          const { code } = location;
  
          const currentConditionsPromise = fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
            .then(response => response.json());
  
          const threeDayForecastPromise = fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
            .then(response => response.json());
  
          Promise.all([currentConditionsPromise, threeDayForecastPromise])
            .then(([currentConditions, threeDayForecast]) => {
              displayForecast(currentConditions, threeDayForecast);
            })
            .catch(error => {
              displayError(error.message);
            });
        })
        .catch(error => {
          displayError(error.message);
        });
    });
  
    function displayForecast(currentConditions, threeDayForecast) {
      currentDiv.innerHTML = `
        <div class="label">Current conditions</div>
        <div class="forecasts">
          <span class="condition symbol">${getWeatherSymbol(currentConditions.forecast.condition)}</span>
          <span class="condition">
            <span class="forecast-data">${currentConditions.name}</span>
            <span class="forecast-data">${currentConditions.forecast.low}&#176; / ${currentConditions.forecast.high}&#176;</span>
            <span class="forecast-data">${currentConditions.forecast.condition}</span>
          </span>
        </div>
      `;
  
      upcomingDiv.innerHTML = `
        <div class="label">Three-day forecast</div>
        <div class="forecasts">
          ${threeDayForecast.forecast
            .map(forecast => `
              <span class="upcoming">
                <span class="symbol">${getWeatherSymbol(forecast.condition)}</span>
                <span class="forecast-data">${forecast.low}&#176; / ${forecast.high}&#176;</span>
                <span class="forecast-data">${forecast.condition}</span>
              </span>
            `)
            .join('')}
        </div>
      `;
  
      forecastDiv.style.display = 'block';
    }
  
    function displayError(message) {
      currentDiv.innerHTML = '';
      upcomingDiv.innerHTML = '';
      forecastDiv.innerHTML = `Error: ${message}`;
      forecastDiv.style.display = 'block';
    }
  
    function getWeatherSymbol(condition) {
      switch (condition) {
        case 'Sunny':
          return '&#x2600;';
        case 'Partly sunny':
          return '&#x26C5;';
        case 'Overcast':
          return '&#x2601;';
        case 'Rain':
          return '&#x2614;';
        default:
          return '';
      }
    }
  };



attachEvents();