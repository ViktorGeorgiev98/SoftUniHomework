function happyCat(input) {
    let numberOfDays = Number(input[0]);
    let hoursPerDay = Number(input[1]);
    let price = 0;
    let totalPrice = 0;
    let pricePerDay = 0;
    let dayCounter = 0;
    for (let day = 1; day <= numberOfDays; day++) {
        dayCounter += 1;
        for (let hour = 1; hour <= hoursPerDay; hour++) {
            if (day % 2 === 0 && hour % 2 != 0) {
                price = 2.50;
                pricePerDay += price
            } else if (day % 2 != 0 && hour % 2 === 0) {
                price = 1.25;
                pricePerDay += price;
            } else {
                price = 1;
                pricePerDay += price;
            }
            // pricePerDay = price * hoursPerDay;
            // console.log(`Day: ${day} – ${pricePerDay} leva`);
        }
        // pricePerDay = price * hoursPerDay;
        console.log(`Day: ${day} - ${pricePerDay.toFixed(2)} leva`);
        totalPrice += pricePerDay;
        pricePerDay = 0;
    }
    console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}
happyCat(["5", "2"]);