function travelTime(input) {
    let schedule = new Map();
    
    for (let line of input) {
        let curentCountry = line.split(' > ');
        let country = curentCountry[0];
        let townAndPrice = curentCountry[1] + ' ' + curentCountry[2];
        if (!schedule.has(country)) {
            schedule.set(country, townAndPrice);
        } else {
            let town = curentCountry[1];
            let currentTownAndCountry = schedule.get(country);
            // let town = currentTown[0];
            if (!currentTownAndCountry.includes(town)) {
                let current = schedule.get(country);
                let newTownAndPrice = current + ' ' + townAndPrice;
                schedule.set(country, newTownAndPrice);
            } else {
                townAndPrice = townAndPrice.split(' ');
                let index = townAndPrice.indexOf(town);
                let current = schedule.get(country);
                let index2 = current.indexOf(town);
                let current2 = current.split(' ');
                if (Number(townAndPrice[index + 1]) < Number(current2[index2 + 1])) {
                    current2[index2 + 1] = townAndPrice[index + 1];
                    current2 = current2.join(' ');
                    schedule.set(country, current2);
                }
            }
        }
    }

    let sorted = Array.from(schedule).sort((a, b) => a[0].localeCompare(b[0]));
    // let sorted = Array.from(schedule).sort((a, b) => a[0].localeCompare(b[0]));
    // let sorted = Object.keys(schedule).sort((a, b) => a[0].localeCompare(b[0]));
    // let sorted = Object.keys(schedule).sort((a, b) => a[0].localeCompare(b[0]));
    // let sorted = Array.from(schedule);

    for (let line of sorted) {
        let country = line.shift();
        let cities = line[0].split(' ');
        cities = cities.join(' -> ');
        console.log(`${country} -> ${cities}`);
    }


}

travelTime([

    'Bulgaria > Sofia > 25000',
    
    'Bulgaria > Sofia > 25000',
    
    'Kalimdor > Orgrimar > 25000',
    
    'Albania > Tirana > 25000',
    
    'Bulgaria > Varna > 25010',
    
    'Bulgaria > Lukovit > 10'
    
    ]);