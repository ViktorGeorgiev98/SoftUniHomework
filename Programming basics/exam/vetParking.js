function vetParking(input) {
    let numberOfDays = Number(input[0]);
    let numberOfHours = Number(input[1]);
    let totalPrice = 0;
    let price = 0;
    let currentPrice = 0;
    let days = 0;
    for (let day = 1; day <= numberOfDays; day++) {
        days += 1;
        for (let hour = 1; hour <= numberOfHours; hour++) {
            price = 1;
            if (day % 2 === 0) {
                if (hour % 2 != 0) {
                    price = 2.50;
                }
            }
            if (day % 2 != 0) {
                if (hour % 2 === 0) {
                    price = 1.25;
                }
            }
            currentPrice += price;
            
        }
        totalPrice += currentPrice
        console.log(`Day: ${days} - ${currentPrice.toFixed(2)} leva`);
        currentPrice = 0;
        
    }
    console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}
vetParking(["5",
"2"])

