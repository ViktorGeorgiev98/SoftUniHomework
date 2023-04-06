function computerStore(arr) {
    let currentCommand = '';
    let totalPrice = 0;
    for (let i = 0; i < arr.length; i++) {
        currentCommand = arr[i];
        if (currentCommand === 'special' || currentCommand === 'regular') {
            break;
        } else {
            if (Number(currentCommand) < 0) {
                console.log('Invalid price!');
            } else {
                totalPrice += Number(currentCommand);
            }
        }
    }
    if (totalPrice <= 0) {
        console.log('Invalid order!');
    } else {
        let taxes = totalPrice * 0.20;
        let finalPrice = totalPrice + taxes;
        if (currentCommand === 'regular') {
            finalPrice = finalPrice;
        } else if (currentCommand === 'special') {
            finalPrice *= 0.90;
        }
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${finalPrice.toFixed(2)}$`);
    }
}
computerStore([
    'regular'
    ])
    