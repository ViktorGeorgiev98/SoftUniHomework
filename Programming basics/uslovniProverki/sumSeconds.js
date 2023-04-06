function sumSeconds(input) {
    let firstTimeSec = Number(input[0]);
    let secondTimeSec = Number(input[1]);
    let thirdTimeSec = Number(input[2]);
    let totalTimeSeoc = firstTimeSec + secondTimeSec + thirdTimeSec;
    let timeMinutes = Math.floor(totalTimeSeoc / 60);
    let timeSeconds = totalTimeSeoc % 60;
    if (timeSeconds < 10) {
        console.log(`${timeMinutes}:0${timeSeconds}`);
    } else {
        console.log(`${timeMinutes}:${timeSeconds}`);
    }
}