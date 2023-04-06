function mobile(input) {
    let contractLength = input[0];
    let conctractType = input[1];
    let mobileInternetYesOrNo = input[2];
    let monthsToPay = Number(input[3]);
    let price = 0;
    let totalSum = 0;
    if (contractLength === 'one') {
        if (conctractType === 'Small') {
            price = 9.98;
        } else if (conctractType === 'Middle') {
            price = 18.99;
        } else if (conctractType === 'Large') {
            price = 25.98;
        } else if (conctractType === 'ExtraLarge') {
            price = 35.99;
        }
    } else if (contractLength === 'two') {
        if (conctractType === 'Small') {
            price = 8.58;
        } else if (conctractType === 'Middle') {
            price = 17.09;
        } else if (conctractType === 'Large') {
            price = 23.59;
        } else if (conctractType === 'ExtraLarge') {
            price = 31.79;
        }
    }
    if (mobileInternetYesOrNo === 'yes') {
        if (price <= 10) {
            price += 5.50;
        } else if (price <= 30 && price > 10) {
            price += 4.35;
        } else if (price > 30) {
            price += 3.85;
        }
    }
    totalSum = price * monthsToPay;
    if (contractLength === 'two') {
        totalSum *= 0.9625;
    }
    console.log(`${totalSum.toFixed(2)} lv.`);
}
mobile(["one",
"Small",
"yes",
"10"])
