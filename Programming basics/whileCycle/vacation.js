function vacation(input) {
    // let moneyNeeded = Number(input[0]);
    // let moneyNow = Number(input[1]);
    let moneyNeeded = Number(input.shift());
    let moneyNow = Number(input.shift());
    let spendDays = 0;
    let totalDays = 0;
    let index = 2;
    while (true) {
        // let action = input[index];
        // let moneySavedOrSpend = Number(input[index[1]]);
        let action = input.shift();
        let moneySavedOrSpend = Number(input.shift());
        totalDays += 1;
        if (action === "save") {
            moneyNow += moneySavedOrSpend;
            spendDays = 0;
        } else if (action === "spend") {
            moneyNow -= moneySavedOrSpend;
            spendDays += 1;
            if (moneyNow <= 0) {
                moneyNow = 0;
            }
        }
        if (spendDays >= "5") {
            console.log(`You can't save the money.`)
            console.log(`${totalDays}`)
            break;
        }
        if (moneyNow >= moneyNeeded) {
            console.log(`You saved the money for ${totalDays} days.`)
            break;
        }
        // index++;
        // action = input[index];
        // moneySavedOrSpend = Number(input[index]);
        
    }
}
vacation(["250",

"150",

"spend",

"50",

"spend",

"50",

"save",

"100",

"save",

"100"])