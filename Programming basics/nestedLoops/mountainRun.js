function mountainRun(input) {
    let recordSeconds = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let secondsFor1Meter = Number(input[2]);
    let timesSlowing = Math.floor(distanceMeters / 50);
    let timeNeeded = (secondsFor1Meter * distanceMeters) + (timesSlowing * 30);
    if (timeNeeded < recordSeconds) {
        console.log(`Yes! The new record is ${timeNeeded.toFixed(2)} seconds.`);
    } else {
        let diff = Math.abs(timeNeeded - recordSeconds);
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
    }
}
mountainRun(["1377",
"389",
"3"])



