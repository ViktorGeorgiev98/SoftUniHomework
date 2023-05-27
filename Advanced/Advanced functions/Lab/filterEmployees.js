function sort(data, criteria) {
    let newData = JSON.parse(data);
    let finalData = [];
    let counter = 0;
    if (criteria === 'all') {
        for (let worker of newData) {
            console.log(`${counter}. ${worker.first_name} ${worker.last_name} - ${worker.email}`);
            counter++;
        }
    } else {
        let [crit, value] = criteria.split('-');
        for (let worker of newData) {
            if (worker[crit] === value) {
                finalData.push(`${counter}. ${worker.first_name} ${worker.last_name} - ${worker.email}`);
                counter++;
            }
        }

        finalData.forEach(worker => {
            console.log(worker);
        })
    }
    // console.log(newData);
}

sort(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
    }, {"id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
    }]`,
   'last_name-Johnson'
   
   )



//     "id": "1",
//     "first_name": "Ardine",
//     "last_name": "Bassam",
//     "email": "abassam0@cnn.com",
//     "gender": "Female"
//     }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Jost",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//     },
//    {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//     }]`,
//    'all')