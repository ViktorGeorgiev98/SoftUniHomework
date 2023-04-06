function foodForPets(input) {
    let days = Number(input[0]);
    let foodTotal = Number(input[1]);
    let index = 2;
    let dogFood = 0;
    let catFood = 0;
    let dayCounter = 0;
    let busquits = 0;
    let dogEaten = 0;
    let catEaten = 0;
    while (true) {
        // dayCounter += 1;
        if (dayCounter >= days) {
            break;
        }
        dogFood = Number(input[index]);
        index++;
        catFood = Number(input[index]);
        index++;
        dayCounter += 1;
        if (dayCounter % 3 === 0) {
            busquits += (catFood + dogFood) * 0.10;
        }
        dogEaten += dogFood;
        catEaten += catFood;
    }
    let totalEatenFood = dogEaten + catEaten;
    let percentageEatenFood = totalEatenFood / foodTotal * 100;
    let dogPercentage = dogEaten / totalEatenFood * 100;
    let catPercentage = catEaten / totalEatenFood * 100;
    console.log(`Total eaten biscuits: ${Math.round(busquits)}gr.`);
    console.log(`${percentageEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogPercentage.toFixed(2)}% eaten from the dog.`);
    console.log(`${catPercentage.toFixed(2)}% eaten from the cat.`);
}
foodForPets(["3",
"1000",
"300",
"20",
"100",
"30",
"110",
"40"])

    
