function garage(input) {
    let garage = new Map();

    for (let line of input) {
        let [garageNumber, car] = line.split(' - ');
        if (!garage.has(garageNumber)) {
            garage.set(garageNumber, [car]);
        } else {
            let currentCars = garage.get(garageNumber);
            currentCars.push(car);
            garage.set(garageNumber, currentCars);
        }
    }

    garage = Array.from(garage);
    for (let [num, cars] of garage) {
        console.log(`Garage № ${num}`);
        // let carsInGarage = cars.split(';');
        for (let car of cars) {
            car = car.replace(/: /g, ' - ');
            console.log(`--- ${car}`);
        }
    }
}

garage(['1 - color: blue, fuel type: diesel', 
'1 - color: red, manufacture: Audi', 
'2 - fuel type: petrol', 
'4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])