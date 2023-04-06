function truckDriver(input) {
    let season = input[0];
    let kmPerMonth = Number(input[1]);
    let totalKm = kmPerMonth * 4;
    let pricePerKm = 0;
    if (season === 'Spring' || season === 'Autumn') {
        if (kmPerMonth <= 5000) {
            pricePerKm = 0.75;
        } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
            pricePerKm = 0.95;
        } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
            pricePerKm = 1.45;
        }
    } else if (season === 'Summer') {
        if (kmPerMonth <= 5000) {
            pricePerKm = 0.90;
        } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
            pricePerKm = 1.10;
        } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
            pricePerKm = 1.45;
        }
    } else if (season === 'Winter') {
        if (kmPerMonth <= 5000) {
            pricePerKm = 1.05;
        } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
            pricePerKm = 1.25;
        } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
            pricePerKm = 1.45;
        }
    }
    let totalMoney = ((kmPerMonth * pricePerKm) * 4) * 0.90; // minus taxes
    console.log(totalMoney.toFixed(2))
}
truckDriver(["Summer" , "3455"])