function basketballEquipment(input) {
    let annualTax = Number(input[0]);
    let shoesPrice = annualTax - annualTax * 0.40;
    let clothesPrice = shoesPrice - shoesPrice * 0.20;
    let ballPrice = clothesPrice / 4;
    let accPrice = ballPrice / 5;
    allPrice = annualTax + shoesPrice + clothesPrice + ballPrice + accPrice;
    console.log(allPrice);
}