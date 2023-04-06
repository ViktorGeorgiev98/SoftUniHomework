function vacation(input) {
    let budjet = Number(input[0]);
    let season = input[1];
    let location = '';
    let accommodation = '';
    let vacationPrice = 0;
    if (budjet <= 1000) {
        accommodation = 'Camp';
        if (season === 'Summer') {
            location = 'Alaska';
            vacationPrice = budjet * 0.65;
        } else if (season === 'Winter') {
            location = 'Morocco';
            vacationPrice = budjet * 0.45;
        }
    } else if (budjet > 1000 && budjet <= 3000) {
        accommodation = 'Hut';
        if (season === 'Summer') {
            location = 'Alaska';
            vacationPrice = budjet * 0.80;
        } else if (season === 'Winter') {
            location = 'Morocco';
            vacationPrice = budjet * 0.60;
        }
    } else if (budjet > 3000) {
        accommodation = 'Hotel';
        if (season === 'Summer') {
            location = 'Alaska';
            vacationPrice = budjet * 0.90;
        } else if (season === 'Winter') {
            location = 'Morocco';
            vacationPrice = budjet * 0.90;
        }
    }
    console.log(`${location} - ${accommodation} - ${vacationPrice.toFixed(2)}`);
}
vacation(["799.50", "Winter"]);