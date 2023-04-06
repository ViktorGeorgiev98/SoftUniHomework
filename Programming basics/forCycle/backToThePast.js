function backToThePast(input) {
    let inheritedMoney = Number(input[0]);
    let yearToLiveTo = Number(input[1]);
    let age = 18;
    let moneyUsed = 0;
    for (let year = 1800; year <= yearToLiveTo; year++) {
        if (year % 2 === 0) {
            moneyUsed += 12000;
        } else if (year % 2 != 0) {
            moneyUsed += 12000 + 50 * age;
        }
        age += 1;
    }
    if (moneyUsed <= inheritedMoney) {
        let diff = Math.abs(moneyUsed - inheritedMoney);
        console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`)
    } else {
        let diff = Math.abs(moneyUsed - inheritedMoney);
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
    }
}
backToThePast(["100000.15", "1808"]);