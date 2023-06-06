function carCompany(input) {
    // variables
    let cars = new Map();
    let models = {};

    // main logic
    for (let row of input) {
        let [carBrand, carModel, producedCars] = row.split(' | ');
        if (!cars.has(carBrand)) {
            cars.set(carBrand, {});
        }
        let currentModel = cars.get(carBrand);
        if (!currentModel.hasOwnProperty(carModel)) {
            currentModel[carModel] = Number(producedCars);
        } else {
            currentModel[carModel] += Number(producedCars);
        }
        cars.set(carBrand, currentModel);
    }
    // printing
    for (let car of cars.entries()) {
        console.log(car[0]);
        // console.log(car[1]);
        for (let carModel of Object.entries(car[1])) {
            // const [model, numbers] = carModel.split(', ');
            console.log(`###${carModel[0]} -> ${carModel[1]}`);
        }
    }
}

carCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);