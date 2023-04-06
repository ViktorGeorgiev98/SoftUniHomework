function suitcase(input) {
    let baggageCapacity = Number(input[0]);
    let index = 1;
    let command = input[index];
    let obem = 0;
    let luggageNumber = 0;
    let totalObem = 0;
    let capacityLeft = baggageCapacity;
    let luggageSuccesfull = 0;
    while (true) {
        if (command === 'End') {
            console.log(`Congratulations! All suitcases are loaded!`);
            break;
        } else {
            obem = Number(command);
            
        }
        luggageNumber += 1;
        if (luggageNumber % 3 === 0) {
            obem *= 1.10;
        }
        if (obem > capacityLeft) {
            console.log(`No more space!`);
            break;
        }
        capacityLeft -= obem;
        luggageSuccesfull += 1;
        index++;
        command = input[index];
    }
    console.log(`Statistic: ${luggageSuccesfull} suitcases loaded.`);
}
suitcase(["550",
"100",
"252",
"72",
"End"])


