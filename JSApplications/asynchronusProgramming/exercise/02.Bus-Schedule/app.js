// function solve() {
//     // TODO:
//     // get used elements => stop info, depart btn, arrive btn
//     // nextStopId = "depot"
//     // get next stop information with next stop id => http://localhost:3030/jsonstore/bus/schedule/:id
//     // parse response 
//     // update HTML content
//     // error handling and disable the buttons

//     const stopInfoElement = document.querySelector('div#info span.info');
//     const departBtn = document.getElementById('depart');
//     const arriveBtn = document.getElementById('arrive');

//     let nextStopId = "depot";
//     let stopName = "";

//     async function depart() {
//        try {
//          // console.log('Depart TODO...');
//          const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`);
//          if (!response.ok) {
//             const error = new Error(response.statusText);
//             throw error;
//          }
//          const data = await response.json();
//          stopName = data.name;
//          nextStopId = data.next;
//          stopInfoElement.textContent = `Next stop ${stopName}`;
//          departBtn.disabled = true;
//          arriveBtn.disabled = false;
//        } catch(err){
//             stopInfoElement.textContent = 'Error';
//             departBtn.disabled = true;
//             arriveBtn.disabled = true;
//        }
//     }

//     async function arrive() {
//         // console.log('Arrive TODO...');
//         stopInfoElement.textContent = `Arriving at ${stopName}`;
//         departBtn.disabled = false;
//         arriveBtn.disabled = true;
//     }

//     return {
//         depart,
//         arrive
//     };
// }
// function solve() {
//     // get elements
//     let firstStopId = 'depot';
//     const stopInfo = document.querySelector('div#info span.info');
//     const departBtn = document.getElementById('depart');
//     const arriveBtn = document.getElementById('arrive');
//     let stopName = "";
//     // console.log(stopInfo);
//     // implement main logic
//     async function depart() {
//         try {
//             const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${firstStopId}`);
//             if (!response.ok) {
//                 throw new Error(response.statusText);
//             }
//             const data = await response.json();
//             stopName = data.name;
//             firstStopId = data.next;
//             stopInfo.textContent = `Next stop ${stopName}`;
//             departBtn.disabled = true;
//             arriveBtn.disabled = false;

//         } catch(e) {
//             stopInfo.textContent = 'Error';
//             departBtn.disabled = true;
//             arriveBtn.disabled = true;
//         }
//     }

//     async function arrive() {
//         stopInfo.textContent = `Arriving at ${stopName}`;
//         departBtn.disabled = false;
//         arriveBtn.disabled = true;
//     }

//     return {
//         depart,
//         arrive
//     };
// }
// let result = solve();


function solve() {
    // get elements
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    const infoTab = document.getElementById('info');
    let StopId = 'depot';
    // let nextStopId = '';
    let stopName = '';
    // implement depart
    async function depart() {
        try {
            let url = `http://localhost:3030/jsonstore/bus/schedule/${StopId}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            stopName = data.name;
            infoTab.textContent = `Next stop ${stopName}`;
            StopId = data.next;
            departButton.disabled = true;
            arriveButton.disabled = false;

        } catch (err) {
            infoTab.textContent = 'Error';
            departButton.disabled = true;
            arriveButton.disabled = true;
        }
    }
    // implement arrive
    async function arrive() {
        try {
            infoTab.textContent = `Arriving at ${stopName}`;
            departButton.disabled = false;
            arriveButton.disabled = true;
        } catch(e) {
            infoTab.textContent = 'Error';
            departButton.disabled = true;
            arriveButton.disabled = true;
        }
    }


    return {
        depart,
        arrive
    }
}


let result = solve();


