function carRent(input) {
    let budjet = Number(input[0]);
    let season = input[1];
    let carPrice = 0;
    let carClass = '';
    let carTypee = '';
    if (budjet <= 100) {
        carClass = 'Economy class';
        if (season === 'Winter') {
            carTypee = 'Jeep';
            carPrice = budjet * 0.65;
        } else if (season === 'Summer') {
            carTypee = 'Cabrio';
            carPrice = budjet * 0.35;
        }
    } else if (budjet > 100 && budjet <= 500) {
        carClass = 'Compact class';
        if (season === 'Winter') {
            carTypee = 'Jeep';
            carPrice = budjet * 0.80;
        } else if (season === 'Summer') {
            carTypee = 'Cabrio';
            carPrice = budjet * 0.45;
        }
    } else if (budjet > 500) {
        carClass = 'Luxury class';
        carTypee = 'Jeep';
        carPrice = budjet * 0.90;
    }
    console.log(carClass);
    console.log(`${carTypee} - ${carPrice.toFixed(2)}`);
}
carRent(["450", "Winter"])