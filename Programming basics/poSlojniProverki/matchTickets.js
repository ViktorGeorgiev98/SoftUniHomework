function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let numberOfPeople = Number(input[2]);
    let ipTicket = 499.99;
    let normalTicket = 249.99;
    let price = 0;
    if (numberOfPeople >= 1 && numberOfPeople <= 4) {
        budget = budget * 0.25;
    } else if (numberOfPeople > 4 && numberOfPeople <= 9) {
        budget = budget * 0.40;
    } else if (numberOfPeople > 9 && numberOfPeople <= 24) {
        budget = budget * 0.50;
    } else if (numberOfPeople > 24 && numberOfPeople <= 49) {
        budget = budget * 0.60;
    } else if (numberOfPeople > 49) {
        budget = budget * 0.75;
    }
    if (category === 'VIP') {
        price = numberOfPeople * ipTicket;
    } else if (category === 'Normal') {
        price = numberOfPeople * normalTicket;
    }
    if (price <= budget) {
        let diff = Math.abs(price - budget);
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        let diff = Math.abs(price - budget);
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}
matchTickets(["30000", "VIP", "49"]);