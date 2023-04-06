function hotelRoom(input) {
    let month = input[0];
    let nightsNum = Number(input[1]);
    let stuidoPrice = 0;
    let apartmentPrice = 0;
    if (month == "May" || month == "October") {
        stuidoPrice = nightsNum * 50;
        apartmentPrice = nightsNum * 65;
        if (nightsNum > 7 && nightsNum <= 14) {
            stuidoPrice = stuidoPrice * 0.95;
        } else if (nightsNum > 14) {
            stuidoPrice = stuidoPrice * 0.70;
            apartmentPrice = apartmentPrice * 0.90;
        }
    } else if (month == "June" || month == "September") {
        stuidoPrice = nightsNum * 75.20;
        apartmentPrice = nightsNum * 68.70;
        if (nightsNum > 14) {
            stuidoPrice = stuidoPrice * 0.80;
            apartmentPrice = apartmentPrice * 0.90;
        }
    } else if (month == "July" || month == "August") {
        stuidoPrice = nightsNum * 76;
        apartmentPrice = nightsNum * 77;
        if (nightsNum > 14) {
            apartmentPrice = apartmentPrice * 0.90;
        }
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
    console.log(`Studio: ${stuidoPrice.toFixed(2)} lv.`)
}
// hotelRoom(["May",

// "15"])