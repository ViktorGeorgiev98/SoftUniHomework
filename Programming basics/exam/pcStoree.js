function pcStoree(input) {
    let numberOfSoldGames = Number(input[0]);
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counte4 = 0;
    for (let i = 1; i <= numberOfSoldGames; i++) {
        let gameName = input[i];
        if (gameName === 'Hearthstone') {
            counter1 += 1;
        } else if (gameName === 'Fornite') {
            counter2 += 1;
        } else if (gameName === 'Overwatch') {
            counter3 += 1;
        } else {
            counte4 += 1;
        }
    }
    let percentage1 = counter1 / numberOfSoldGames * 100;
    let percentage2 = counter2 / numberOfSoldGames * 100;
    let percentage3 = counter3 / numberOfSoldGames * 100;
    let percentage4 = counte4 / numberOfSoldGames * 100;
    console.log(`Hearthstone - ${percentage1.toFixed(2)}%`);
    console.log(`Fornite - ${percentage2.toFixed(2)}%`);
    console.log(`Overwatch - ${percentage3.toFixed(2)}%`);
    console.log(`Others - ${percentage4.toFixed(2)}%`);
}
pcStoree(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);