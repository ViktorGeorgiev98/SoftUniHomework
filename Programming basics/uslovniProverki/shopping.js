function shopping(input) {
    let budget = Number(input[0]);
    let videocardNumber = Number(input[1]);
    let processorNumber = Number(input[2]);
    let ramNumber = Number(input[3]);
    let priceVideoCard = videocardNumber * 250;
    let priceProcessor = priceVideoCard * 0.35 * processorNumber;
    let priceRam = priceVideoCard * 0.10 * ramNumber;
    let finalPrice = priceProcessor + priceVideoCard + priceRam;
    if (videocardNumber > processorNumber) {
        finalPrice = finalPrice * 0.85;
    }
    if (finalPrice <= budget) {
        let moneyLeft = Math.abs(finalPrice - budget);
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`)
    } else {
        let moneyNeeded = Math.abs(budget - finalPrice);
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`)
    }

}
shopping(["900", "2", "1", "3"])