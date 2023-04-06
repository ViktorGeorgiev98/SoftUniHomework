function courier(input) {
    let weight = Number(input[0]);
    let usluga = input[1];
    let distance = Number(input[2]);
    let price = 0;
    let expressCharge = 0;
    if (usluga === "standard") {
        if (weight < 1) {
            price = distance * 3;
        } else if (weight >= 1 && weight < 10) {
            price = distance * 5;
        } else if (weight >= 10 && weight < 40) {
            price = distance * 10;
        } else if (weight >= 40 && weight < 90) {
            price = distance * 15;
        } else if (weight >= 90 && weight < 150) {
            price= distance * 20;
        }
    } else if (usluga === "express") {
        if (weight < 1) {
            expressCharge = (0.8 * 3) * weight;
            price = (distance * 3) + (expressCharge * distance);
        } else if (weight >= 1 && weight < 10) {
            expressCharge = (0.4 * 5) * weight;
            price = (distance * 5) + (expressCharge * distance);
        } else if (weight >= 10 && weight < 40) {
            expressCharge = (0.05 * 10) * weight;
            price = (distance * 10) + (expressCharge * distance);
        } else if (weight >= 40 && weight < 90) {
            expressCharge = (0.02 * 15) * weight;
            price = (distance * 15) + (expressCharge * distance);
        } else if (weight >= 90 && weight < 150) {
            expressCharge = (0.01 * 20) * weight;
            price = (distance * 20) + (expressCharge * distance);
        }

    }
    price = price / 100;
    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
}
courier(["20", 
"standard",
"349"])


