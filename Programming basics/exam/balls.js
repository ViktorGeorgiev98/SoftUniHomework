function balls(input) {
    let numberOfBalls = Number(input[0]);
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;
    let points = 0;
    let otherColoursPicked = 0;
    let divides = 0;
    for (let n = 1; n <= numberOfBalls; n++) {
        let ballColour = input[n];
        if (ballColour === 'red') {
            points += 5;
            redBalls += 1;
        } else if (ballColour === 'orange') {
            points += 10;
            orangeBalls += 1;
        } else if (ballColour === 'yellow') {
            points += 15;
            yellowBalls += 1;
        } else if (ballColour === 'white') {
            points += 20;
            whiteBalls += 1;
        } else if (ballColour === 'black') {
            points = Math.floor(points / 2);
            divides += 1;
        } else {
            otherColoursPicked += 1;
        }
    }
    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherColoursPicked}`);
    console.log(`Divides from black balls: ${divides}`);
}
balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])

