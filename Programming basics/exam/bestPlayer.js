function bestPlayer(input) {
    let command = input[0];
    let index = 1;
    let playerBest = '';
    let mostGoalsScored = 0;
    let currentPlayer = '';
    while (true) {
        if (command === 'END') {
            break;
        } else {
            currentPlayer = command;
        }
        let goalsScored = Number(input[index]);
        index++;
        if (goalsScored > mostGoalsScored) {
            mostGoalsScored = goalsScored;
            playerBest = currentPlayer;
        }
        if (goalsScored >= 10) {
            break;
        }
        command = input[index];
        index++;
    }
    console.log(`${playerBest} is the best player!`);
    if (mostGoalsScored >= 3) {
        console.log(`He has scored ${mostGoalsScored} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${mostGoalsScored} goals.`);
    }
    
}
bestPlayer(["Silva",
"5",
"Harry Kane",
"10"])

