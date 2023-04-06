function timePlus15(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let minutesPlus = minutes + 15;
    if (minutesPlus > 59) {
        hour += 1;
        minutes = Math.abs(60 - minutesPlus);
    } else {
        minutes = minutesPlus
    }
    if (hour > 23) {
        hour = 0;
    }
    if (minutes < 10) {
        console.log(`${hour}:0${minutes}`);
    } else {
        console.log(`${hour}:${minutes}`);
    }
}
timePlus15(["0", "01"]);