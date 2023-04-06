function needForSpeed3(input) {

    //  variables

    let carQuantity = Number(input.shift());
    let cars = new Map();

    // function to create cars

    function createCar(carName, carMileage, carFuel) {
        let car = {
            name: carName,
            mileage: Number(carMileage),
            fuel: Number(carFuel),
            Drive(distance, fuel) {
                if (fuel > this.fuel) {
                    console.log('Not enough fuel to make that ride');
                } else {
                    this.mileage += distance;
                    this.fuel -= fuel;
                    console.log(`${this.name} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                }
            },
            Refuel(fuel) {
                let difference = 75 - this.fuel;
                this.fuel += fuel;
                if (this.fuel > 75) {
                    this.fuel = 75;
                    console.log(`${this.name} refueled with ${difference} liters`);
                } else {
                    console.log(`${this.name} refueled with ${fuel} liters`);
                }
            },
            Revert(kilometers) {
                this.mileage -= kilometers;
                if (this.mileage < 10000) {
                    this.mileage = 10000;
                } else {
                    console.log(`${this.name} mileage decreased by ${kilometers} kilometers`);
                }
            }
        };

        return car;
    }

    // putting the cars in the map

    for (let i = 0; i < carQuantity; i++) {
        let currentCar = input.shift();
        let [model, mileage, fuel] = currentCar.split('|');
        let car = createCar(model, mileage, fuel);
        cars.set(model, car);
    }

    // main logic of the task

    for (let line of input) {
        let currentComand = line.split(' : ');
        let command = currentComand.shift();
        if (command === 'Stop') {
            break;
        }
        
        if (command === 'Drive') {
            let currentCar = currentComand[0];
            let currentDistance = Number(currentComand[1]);
            let currentFuel = Number(currentComand[2]);
            if (cars.has(currentCar)) {
                let currentResult = cars.get(currentCar);
                currentResult.Drive(currentDistance, currentFuel);
                cars.set(currentCar, currentResult);
                if (currentResult.mileage > 100000) {
                    cars.delete(currentCar);
                    console.log(`Time to sell the ${currentCar}!`);
                }
                
            }
        } else if (command === 'Refuel') {
            let currentCar = currentComand[0];
            let currentFuel = Number(currentComand[1]);
            if (cars.has(currentCar)) {
                let currentResult = cars.get(currentCar);
                currentResult.Refuel(currentFuel);
                cars.set(currentCar, currentResult);
            }
        } else if (command === 'Revert') {
            let currentCar = currentComand[0];
            let currentKilometers = Number(currentComand[1]);
            if (cars.has(currentCar)) {
                let currentResult = cars.get(currentCar);
                currentResult.Revert(currentKilometers);
                cars.set(currentCar, currentResult);
            }
        }
    }

    //  print the end result

    for (let line of cars.values()) {
        console.log(`${line.name} -> Mileage: ${line.mileage} kms, Fuel in the tank: ${line.fuel} lt.`);
    }

}

needForSpeed3([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]
  
  )