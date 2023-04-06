function flowerShop(input) {
    let hrizantemNumber = Number(input[0]);
    let roseNumber = Number(input[1]);
    let laleNumber = Number(input[2]);
    let season = input[3];
    let holidayYesOrNo = input[4];
    let allPriceFlowers = 0;
    let hrizantemPrice = 0;
    let rosePrice = 0;
    let lalePrice = 0;
    let allNumberFlowers = hrizantemNumber + roseNumber + laleNumber;
    if (season === 'Spring' || season === 'Summer') {
        hrizantemPrice = 2 * hrizantemNumber;
        rosePrice = 4.10 * roseNumber;
        lalePrice = 2.50 * laleNumber;
        allPriceFlowers = hrizantemPrice + rosePrice + lalePrice;
        if (holidayYesOrNo === 'Y') {
            allPriceFlowers = allPriceFlowers * 1.15;
        }
        if (season === 'Spring') {
            if (laleNumber > 7) {
                allPriceFlowers = allPriceFlowers * 0.95;
            }
        }
    } else if (season === 'Autumn' || season === 'Winter') {
        hrizantemPrice = 3.75 * hrizantemNumber;
        rosePrice = 4.50 * roseNumber;
        lalePrice = 4.15 * laleNumber;
        allPriceFlowers = hrizantemPrice + rosePrice + lalePrice;
        if (holidayYesOrNo === 'Y') {
            allPriceFlowers = allPriceFlowers * 1.15;
        }
        if (season === 'Winter') {
            if (roseNumber >= 10) {
                allPriceFlowers = allPriceFlowers * 0.90;
            }
        }
    }
    if (allNumberFlowers > 20) {
        allPriceFlowers = allPriceFlowers * 0.80;
    }
    let finalPrice = allPriceFlowers + 2;
    console.log(finalPrice.toFixed(2));
}
flowerShop(["3", "10", "9", "Winter", "N"])