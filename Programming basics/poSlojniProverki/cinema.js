function cinema(input) {
    let projectionType = input[0];
    let rowsNum = Number(input[1]);
    let columnsNum = Number(input[2]);
    let seats = rowsNum * columnsNum;
    let price = 0;
    if (projectionType == "Premiere") {
        price = 12;
    } else if (projectionType == "Normal") {
        price = 7.50;
    } else if (projectionType == "Discount") {
        price = 5;
    }
    let wholePrice = seats * price;
    console.log(wholePrice.toFixed(2));
}