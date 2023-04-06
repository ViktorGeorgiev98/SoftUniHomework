function addBags(input) {
    let price = Number(input[0]);
    let luggageKilos = Number(input[1]);
    let daysTillJourney = Number(input[2]);
    let numberOfLuggages = Number(input[3]);
    // let priceLessThan10 = 0;
    // let priceBetween10and20 = 0;
    if (luggageKilos < 10) {
        price = price * 0.20;
    }else if (luggageKilos >= 10 && luggageKilos <= 20) {
        price = price * 0.50;
    } else {
        price = price;
    }
    if (daysTillJourney > 30) {
        price *= 1.10;
    } else if (daysTillJourney >= 7 && daysTillJourney <= 30) {
        price *= 1.15;
    } else if (daysTillJourney < 7) {
        price *= 1.40;
    }
    console.log(`The total price of bags is: ${(price * numberOfLuggages).toFixed(2)} lv.`);

}
addBags(["30",
"18",
"15",
"2"])
