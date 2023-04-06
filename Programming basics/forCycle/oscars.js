function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let juryNumber = Number(input[2]);
    let points = academyPoints;
    for (let i = 3; i < input.length; i++) {
        let juryName = input[i++];
        let juryPoints = Number(input[i]);
        let pointsGiven = juryPoints * Number(juryName.length) / 2;
        points += pointsGiven;
        if (points > 1250.5) {
            break
        }
    }
    if (points > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points}!`)
    } else {
        let diff = 1250.5 - points;
        console.log(`Sorry, ${actorName} you need ${diff} more!`)
    }

}

oscars(["Zahari Baharov",

"205",

"4",

"Johnny Depp",

"45",

"Will Smith",

"29",

"Jet Lee",

"10",

"Matthew Mcconaughey",

"39"])