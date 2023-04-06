function fuelTank2(input) {
    let fuelType = input[0];
    let fuelQuantity = Number(input[1]);
    let havingClubCard = input[2];
    let price = 0;
    let gasolinePrice = 2.22;
    let dieselPrice = 2.33;
    let gasPrice = 0.93;
    if (fuelType === 'Gasoline') {
        price = fuelQuantity * gasolinePrice;
        if (havingClubCard === 'Yes') {
            price = fuelQuantity * (gasolinePrice - 0.18);
        }
        if (fuelQuantity >= 20 && fuelQuantity <= 25) {
            price = price * 0.92;
        }
        if (fuelQuantity > 25) {
            price = price * 0.90;
        }
    } else if (fuelType === 'Gas') {
        price = fuelQuantity * gasPrice;
        if (havingClubCard === 'Yes') {
            price = fuelQuantity * (gasPrice - 0.08);
        }
        if (fuelQuantity >= 20 && fuelQuantity <= 25) {
            price = price * 0.92;
        }
        if (fuelQuantity > 25) {
            price = price * 0.90;
        }
    } else if (fuelType === 'Diesel') {
        price = fuelQuantity * dieselPrice;
        if (havingClubCard === 'Yes') {
            price = fuelQuantity * (dieselPrice - 0.12);
        }
        if (fuelQuantity >= 20 && fuelQuantity <= 25) {
            price = price * 0.92;
        }
        if (fuelQuantity > 25) {
            price = price * 0.90;
        }
    }
    console.log(`${price.toFixed(2)} lv.`)
}
fuelTank2(["Diesel" , "19" , "No"]);