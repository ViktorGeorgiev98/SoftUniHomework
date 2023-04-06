function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let vacationType = "";
    let price = 0;
    if ( budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            price = budget * 0.3;
            vacationType = "Camp"
        } else if (season == "winter") {
            price = budget * 0.7;
            vacationType = "Hotel"
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            price = budget * 0.4;
            vacationType = "Camp"
        } else if (season == "winter") {
            price = budget * 0.8;
            vacationType = "Hotel"
        }
    } else if (budget > 1000) {
        destination = "Europe";
        price = budget * 0.9;
        vacationType = "Hotel"
        
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${vacationType} - ${price.toFixed(2)}`)
}