function reportSystem(input) {
    let sumNeeded = Number(input[0]);
    let index = 1;
    let currentSum = 0;
    let cardCounter = 0;
    let cashCounter = 0;
    let paymentCounter = 0;
    let cashMoney = 0;
    let cardMoney = 0;
    while(true) {
        let command = input[index];
        index++;
        if (command === 'End') {
            console.log('Failed to collect required money for charity.');
            break;
        }
        let currentMoney = Number(command);
        paymentCounter += 1;
        // paymentCounter += 1;
        // currentSum += currentMoney;
        
        if (paymentCounter % 2 != 0) {
            if (currentMoney > 100) {
                console.log('Error in transaction!')
                // continue;
            } else {
                currentSum += currentMoney;
                cashCounter += 1;
                // paymentCounter += 1;
                console.log('Product sold!');
                cashMoney += currentMoney;
            }
        } else if (paymentCounter % 2 === 0) {
            if (currentSum < 10) {
                console.log('Error in transaction!');
                // continue;
            } else {
                currentSum += currentMoney;
                cardCounter += 1;
                // paymentCounter += 1;
                console.log('Product sold!');
                cardMoney += currentMoney;
            }
        }
        if (currentSum >= sumNeeded) {
            break;
        }
        // index++;

    }
    if (currentSum >= sumNeeded) {
        console.log(`Average CS: ${(cashMoney / cashCounter).toFixed(2)}`);
        console.log(`Average CC: ${(cardMoney / cardCounter).toFixed(2)}`);
    }

}
reportSystem(["600", "86", "150", "98", "227", "End",]);