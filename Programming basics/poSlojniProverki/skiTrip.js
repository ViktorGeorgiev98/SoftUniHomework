function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let grade = input[2];
    let price = 0;
    if (roomType == "room for one person") {
        price = (days - 1) * 18;
        if (grade == "positive") {
            price = ((days - 1) * 18) * 1.25;
        } else if (grade == "negative") {
            price = ((days - 1) * 18) * 0.90;
        }

    } else if (roomType == "apartment") {
        price = (days - 1) * 25;
        if ( days < 10) {
            price = ((days - 1) * 25) * 0.70;
        } else if (days >= 10 && days <= 15) {
            price = ((days - 1) * 25) * 0.65;
        } else if (days > 15) {
            price = ((days - 1) * 25) * 0.50;
        }
        if (grade == "positive") {
            price = price * 1.25;
        } else if (grade == "negative") {
            price = price * 0.90;
        }
    } else if (roomType == "president apartment") {
        price = (days - 1) * 35;
        if (days < 10) {
            price = ((days - 1) * 35) * 0.90;
        } else if (days >= 10 && days <= 15) {
            price = ((days - 1) * 35) * 0.85;
        } else if (days > 15) {
            price = ((days - 1) * 35) * 0.80;
        }
        if (grade == "positive") {
            price = price * 1.25;
        } else if (grade == "negative") {
            price = price * 0.90;
        }
    }
    console.log(price.toFixed(2));
}
skiTrip(["30",

"president apartment",

"negative"])