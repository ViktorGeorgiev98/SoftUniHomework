function lunchBreak(input) {
    nameSeries = input[0];
    durationEpisode = Number(input[1]);
    durationBreak = Number(input[2]);
    let timeLunch = durationBreak / 8;
    let timeLeisure = durationBreak / 4;
    let timeForWatching = durationBreak - timeLunch - timeLeisure;
    if (timeForWatching >= durationEpisode) {
        let timeLeft = Math.abs(timeForWatching - durationEpisode);
        console.log(`You have enough time to watch ${nameSeries} and left with ${Math.ceil(timeLeft)} minutes free time.`)
    } else {
        let timeNeeded = Math.abs(timeForWatching - durationEpisode);
        console.log(`You don't have enough time to watch ${nameSeries}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }
}
lunchBreak(["Teen Wolf",

"48",

"60"])