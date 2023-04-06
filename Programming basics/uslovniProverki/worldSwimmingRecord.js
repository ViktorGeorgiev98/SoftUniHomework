function wordSwimmingRecord(input) {
    let recordSec = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let secondsForMeter = Number(input[2]);
    let ivanTime = secondsForMeter * distanceMeters;
    // let slowdown = Math.floor(distanceMeters // 15 * 12.5);
    let slowdown = Math.floor(distanceMeters / 15) * 12.5;
    let finalTime = ivanTime + slowdown;
    if (finalTime < recordSec) {
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
    } else {
        let neededTime = Math.abs(recordSec - finalTime);
        console.log(`No, he failed! He was ${neededTime.toFixed(2)} seconds slower.`)
    }


}
    
    
