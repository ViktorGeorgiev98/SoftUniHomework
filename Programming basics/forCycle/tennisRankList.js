function rankList(input) {
    let numberOfTournaments = Number(input[0]);
    let numberOfPoints = Number(input[1]);
    let wonTournaments = 0;
    let pointsWon = 0;
    for (let i = 2; i <= numberOfTournaments + 1; i++) {
        let currentTournamentResult = input[i];
        if (currentTournamentResult === "W") {
            pointsWon += 2000;
            wonTournaments += 1;
        } else if (currentTournamentResult === "F") {
            pointsWon += 1200;
        } else if (currentTournamentResult === "SF") {
            pointsWon += 720;
        }
    }
    let winPercentage = wonTournaments / numberOfTournaments * 100;
    let averagePoints = pointsWon / numberOfTournaments;
    let allPoints = pointsWon + numberOfPoints;
    console.log(`Final points: ${allPoints}`)
    console.log(`Average points: ${(Math.floor(averagePoints))}`)
    console.log(`${winPercentage.toFixed(2)}%`)
}
rankList(["4",

"750",

"SF",

"W",

"SF",

"W"])