function carFactory(car) {
    let engine = checkEngine(car.power);
    let carriage = checkCarriage(car.carriage, car.color);
    let newWheels = checkWheels(car.wheelsize);
    let newCar = {
        model: car.model,
        engine: engine,
        carriage: carriage,
        wheels: newWheels
    }
    function checkWheels(wheels) {
        let currentWheels = [];
        if (wheels % 2 === 0) {
            wheels -= 1;
        }
        currentWheels.push(wheels, wheels, wheels, wheels);
        return currentWheels;
    }
    function checkCarriage(carriage, colour) {
        let currentCarriage = {};
        if (carriage === 'hatchback') {
            currentCarriage.type = 'hatchback';
            currentCarriage.color = colour;
        } else if (carriage === 'coupe') {
            currentCarriage.type = 'coupe';
            currentCarriage.color = colour;
        }

        return currentCarriage;
    }
    function checkEngine(power) {
        let currentEngine = {};
        if (power <= 90) {
            currentEngine.power = 90;
            currentEngine.volume = 1800;
        } else if (power <= 120) {
            currentEngine.power = 120;
            currentEngine.volume = 2400;
        } else if (power > 120) {
            currentEngine.power = 200;
            currentEngine.volume = 3500;
        }
        return currentEngine;
    }

    // console.log(newCar);
    return newCar;
}

carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 });