// async function getInfo() {
//     // get busId 
//     // fetch data 
//     // parse response
//     // error handling
//     // add data to html
//     const busListElements = document.getElementById('buses');
//     busListElements.innerHTML = '';
//     const stopId = document.getElementById('stopId').value;
//     try {
//         // document.getElementById('stopName').textContent = "Loading...";
//         // await new Promise((resolve, reject) => {
//         //     setTimeout(() => {
//         //         resolve(); 
//         //     }, 1000);
//         // })
//         const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);
//         if (!response.ok) {
//             const error = new Error(response.statusText);
//             throw error;
//         }
//         const data = await response.json();
//         document.getElementById('stopName').textContent = data.name;
//         Object.entries(data.buses).forEach(([busId, time]) => {
//         const liElement = document.createElement('li');
//         liElement.textContent = `Bus ${busId} arrives in ${time} minutes`;
//         busListElements.appendChild(liElement);

const { default: emojiRegex } = require("emoji-regex/es2015/text");

//     })
//     } catch(error) {
//         document.getElementById('stopName').textContent = "Error";
//     }
// }

// async function getInfo() {
//     // get elements
//     const inputFieldValue = document.getElementById('stopId').value;
//     const url = `http://localhost:3030/jsonstore/bus/businfo/${inputFieldValue}`;
//     const stopName = document.getElementById('stopName');
//     const busesList = document.getElementById('buses');

//     // implement request
//     try {
//         busesList.innerHTML = '';
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(response.statusText);
//         }
//         const busData = await response.json();
//         const currentStopName = busData.name;
//         stopName.textContent = currentStopName;
//         Object.entries(busData.buses).forEach(([busId, time]) => {
//             const liElement = document.createElement('li');
//             liElement.textContent = `Bus ${busId} arrives in ${time} minutes`;
//             busesList.appendChild(liElement);
//         })
//     } catch (e) {
//         stopName.textContent = "Error";
//     }
// }



async function getInfo() {
    // get elements
    const submitButton = document.getElementById("submit");
    const stopId = document.getElementById("stopId").value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    const stopName = document.getElementById("stopName");
    const busList = document.getElementById("buses");
    busList.innerHTML = '';
    stopName.innerHTML = '';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        // console.log(data);
        stopName.textContent = data.name;
        Object.entries(data.buses).forEach(([busId, time]) => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${busId} arrives in ${time} minutes`;
            busList.appendChild(liElement);
        });

    } catch (e) {
        console.log(e);
        stopName.textContent = "Error";
    }
}


