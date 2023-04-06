function pool(input) {
    let peopleNumber = Number(input[0]);
    let tax = Number(input[1]);
    let shezlongPrice = Number(input[2]);
    let chadurPrice = Number(input[3]);
    let wholeTax = peopleNumber * tax;
    let chadurTotalPrice = Math.ceil(peopleNumber * 0.50) * chadurPrice;
    let shezlongTotalPrice = Math.ceil(peopleNumber * 0.75) * shezlongPrice;
    let finalPrice = wholeTax + chadurTotalPrice + shezlongTotalPrice;
    console.log(`${finalPrice.toFixed(2)} lv.`);
}
pool(["21", "5.50", "4.40", "6.20"]);