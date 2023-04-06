function blackFlag(arr) {
    let daysOfPlunder = Number(arr.shift());
    let plunderPerDay = Number(arr.shift());
    let expectedPlunder = Number(arr.shift());
    let totalPlunder = 0;
    for (let i = 1; i <= daysOfPlunder; i++) {
        totalPlunder += plunderPerDay;
        if (i % 3 === 0) {
            totalPlunder += plunderPerDay / 2;
        }
        if (i % 5 === 0) {
            totalPlunder *= 0.70;
        } 
    }
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentageOfGainedPlunder = (totalPlunder / expectedPlunder) * 100;
        console.log(`Collected only ${percentageOfGainedPlunder.toFixed(2)}% of the plunder.`); 
    }
}
blackFlag(["5",
"40",
"100"])

console.log('00000000000000000000000000000')



blackFlag(["10",
"20",
"380"])

