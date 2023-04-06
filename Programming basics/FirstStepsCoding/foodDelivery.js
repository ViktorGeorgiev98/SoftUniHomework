function foodDelivery(input) {
    let chickenMenuNum = Number(input[0]);
    let fishMenuNum = Number(input[1]);
    let vegMenuNum = Number(input[2]);
    let chickenMenuPrice = chickenMenuNum * 10.35;
    let fishMenuPrice = fishMenuNum * 12.40;
    let vegMenuPrice = vegMenuNum * 8.15;
    let dessertPrice = (chickenMenuPrice + fishMenuPrice + vegMenuPrice) * 0.20;
    let finalPrice = chickenMenuPrice + fishMenuPrice + vegMenuPrice + dessertPrice + 2.50;
    console.log(finalPrice);
}