function footballKit(input) {
    let tshirtPrice = Number(input[0]);
    let priceForBall = Number(input[1]);
    let shortsPrice = tshirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let sneakersPrice = (tshirtPrice + shortsPrice) * 2;
    let percentage = 15 / 100;
    let finalPrice = (tshirtPrice + shortsPrice + socksPrice + sneakersPrice) - ((tshirtPrice + shortsPrice + socksPrice + sneakersPrice) * percentage);

    if (finalPrice >= priceForBall) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${finalPrice.toFixed(2)} lv.`);
    } else {
        let diff = Math.abs(finalPrice - priceForBall);
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);
    }
    
}
footballKit(["55",
"310"])

