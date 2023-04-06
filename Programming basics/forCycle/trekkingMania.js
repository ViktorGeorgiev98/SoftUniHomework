function trekking(input) {
    let numberOfGroups = Number(input[0]);
    let musalaNumber = 0;
    let monblancNumber = 0;
    let kilimandjaroNumber = 0;
    let k2Number = 0;
    let everestNumber = 0;
    let sumPeople = 0;
    for (let i = 1; i <= numberOfGroups; i++) {
        let numberOfClimbers = Number(input[i]);
        if (numberOfClimbers <= 5) {
            musalaNumber += numberOfClimbers;
            sumPeople += numberOfClimbers
        } else if (numberOfClimbers <= 12) {
            monblancNumber += numberOfClimbers;
            sumPeople += numberOfClimbers;
        } else if (numberOfClimbers <= 25) {
            kilimandjaroNumber += numberOfClimbers
            sumPeople += numberOfClimbers;
        } else if (numberOfClimbers <= 40) {
            k2Number += numberOfClimbers;
            sumPeople += numberOfClimbers;
        } else if (numberOfClimbers >= 41) {
            everestNumber += numberOfClimbers;
            sumPeople += numberOfClimbers;
        }
    }
    let musalaPercentage = musalaNumber / sumPeople * 100;
    let monblancPercentage = monblancNumber / sumPeople * 100;
    let kiliPercentage = kilimandjaroNumber / sumPeople * 100;
    let k2Percentage = k2Number / sumPeople * 100;
    let everestPercentage = everestNumber / sumPeople * 100;
    console.log(`${musalaPercentage.toFixed(2)}%`)
    console.log(`${monblancPercentage.toFixed(2)}%`)
    console.log(`${kiliPercentage.toFixed(2)}%`)
    console.log(`${k2Percentage.toFixed(2)}%`)
    console.log(`${everestPercentage.toFixed(2)}%`)
    
}

trekking(["5",

"25",

"41",

"31",

"250",

"6"])