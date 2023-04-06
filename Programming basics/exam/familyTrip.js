function familyTrip(input) {
    let budjet = Number(input[0]);
    let nights = Number(input[1]);
    let priceNight = Number(input[2]);
    let percentageOther = Number(input[3]);
    let percentagePayment = budjet * percentageOther / 100;
    let totalNightsPrice = nights * priceNight;
    if (nights > 7) {
        totalNightsPrice *= 0.95;
    }
    let endPrice = percentagePayment + totalNightsPrice;
    if (endPrice <= budjet) {
        let diff = Math.abs(endPrice - budjet);
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        let diff = Math.abs(endPrice - budjet);
        console.log(`${diff.toFixed(2)} leva needed.`);
    }
}
familyTrip(["800.50", "8", "100", "2"]);