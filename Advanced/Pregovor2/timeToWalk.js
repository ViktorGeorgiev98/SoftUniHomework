function timeToWalk(num1, num2, num3) {
    let distanceMeters = num1 * num2;
    let speed = num3 * 1000 / 3600;
    let rest = Math.floor(distanceMeters / 500) * 60;
    let totalTime = (distanceMeters / speed) + rest;
    let hours = Math.floor(totalTime / 3600).toFixed(0).padStart(2, "0");
    let minutes = Math.floor(totalTime / 60).toFixed(0).padStart(2, "0");
    let seconds = Math.round(totalTime % 60).toFixed(0).padStart(2, "0");
    console.log(`${hours}:${minutes}:${seconds}`);
//     let distanceMeters = num1 * num2;
//     let speedMeterSec = num3 / 3.6;
//     let time = distanceMeters / speedMeterSec;
//     let rest = Math.floor(distanceMeters / 500);
//     let timeMin = Math.floor(time / 60);
//     let timeSec = Math.ceil(time - timeMin * 60);
//     let timeH = Math.floor(time / 3600);
//     let hh = timeH < 10 ? "0" : "";
//     let mm = timeMin + rest < 10 ? "0" : "";
//     let ss = timeSec < 10 ? "0" : "";
//     let output = `${hh + timeH}:${Number(mm) + timeMin + rest}:${ss + timeSec}`;
//     console.log(output);

}

timeToWalk(2564, 0.70, 5.5);