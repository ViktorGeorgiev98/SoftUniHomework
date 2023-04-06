function safari(input) {
    let budget = Number(input[0]);
    let fuelNeeded = Number(input[1]);
    let day = input[2];
    let fuelPrice = fuelNeeded * 2.10;
    let guideSum = 100;
    let sumNeeded = fuelPrice + guideSum;
    if (day === 'Saturday') {
        sumNeeded *= 0.90;
    } else if (day === 'Sunday') {
        sumNeeded *= 0.80;
    }
    let diff = Math.abs(sumNeeded - budget);
    if (sumNeeded <= budget) {
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
    }
}
safari(["1000",
"10",
"Sunday"])
