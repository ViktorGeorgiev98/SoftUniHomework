function aluminium(input) {
    let dogramaNumber = Number(input[0]);
    let dogramaType = input[1];
    let wayOfDelivery = input[2];
    let price = 0;
    let deliveryPrice = 60;
    let totalPrice = 0;
    if (dogramaType === '90X130') {
        price = 110;
        if (dogramaNumber > 30 && dogramaNumber <= 60) {
            price *= 0.95;
        } else if (dogramaNumber > 60) {
            price *= 0.92;
        }
    } else if (dogramaType === '100X150') {
        price = 140;
        if (dogramaNumber > 40 && dogramaNumber <= 80) {
            price *= 0.94;
        } else if (dogramaNumber > 80) {
            price *= 0.90;
        }
    } else if (dogramaType === '130X180') {
        price = 190;
        if (dogramaNumber > 20 && dogramaNumber <= 50) {
            price *= 0.93;
        } else if (dogramaNumber > 50) {
            price *= 0.88;
        }
    } else if (dogramaType === '200X300') {
        price = 250;
        if (dogramaNumber > 25 && dogramaNumber <= 50) {
            price *= 0.91;
        } else if (dogramaNumber > 50) {
            price *= 0.86;
        }
    }
    if (wayOfDelivery === 'With delivery') {
        totalPrice = (price * dogramaNumber) + 60;
    } else if (wayOfDelivery === 'Without delivery') {
        totalPrice = price * dogramaNumber;
    }
    if (dogramaNumber > 99) {
        totalPrice *= 0.96;
    }
    if (dogramaNumber < 10) {
        console.log(`Invalid order`);
    } else {
        console.log(`${totalPrice.toFixed(2)} BGN`);
    }
}
aluminium(["2",
"130X180",
"With delivery"])

