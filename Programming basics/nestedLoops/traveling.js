function traveling(input) {
    // let index = 1;
    // let index2 = 2;
    let destination = input[0];
    let budgetNeeded = Number(input[1]);
    let index = 2;
    // let index2 = 2;
    let amount = 0;
    while (destination !== "End") {
    // while (true) {
        // let destination = input[index];
        // if (destination === "End") {
        //     break;
        // }
        let country = destination;
        // let budgetNeeded = Number(input[index]); 
        while (budgetNeeded > amount) {
            let moneySaved = Number(input[index])
            amount += moneySaved;
            // if (budgetNeeded <= amount) {
            //     console.log(`Going to ${country}!`);
            // index2++;
            // moneySaved = Number(input[index2]);
            if (budgetNeeded <= amount) {
                console.log(`Going to ${country}!`);
                break;
            }
            // index2++;
            index++
            moneySaved = Number(input[index]);
            // if (budgetNeeded <= amount) {
            //     console.log(`Going to ${country}!`);
            //     break;
        }
        // index++
        // amount = 0;
        destination = input[index++];
        budgetNeeded = Number(input[index]);
        // index++
        amount = 0;

    }
        
        // index++
}

traveling(["Greece",

"1000",

"200",

"200",

"300",

"100",

"150",

"240",

"Spain",

"1200",

"300",

"500",

"193",

"423",

"End"])