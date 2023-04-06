function agencyProfit(input) {
    let companyName = input[0];
    let ticketsAdult = Number(input[1]);
    let ticketsKids = Number(input[2]);
    let ticketAdultPrice = Number(input[3]);
    let tax = Number(input[4]);
    let kidTicketPrice = ticketAdultPrice * 0.3;
    let adultTicketPriceTax = ticketAdultPrice + tax;
    let kidTicketPriceTax = kidTicketPrice + tax;
    let wholeSum = ((ticketsAdult * adultTicketPriceTax) + (ticketsKids * kidTicketPriceTax)) * 0.20;
    console.log(`The profit of your agency from ${companyName} tickets is ${wholeSum.toFixed(2)} lv.`);
}
agencyProfit(["WizzAir",
"15",
"5",
"120",
"40"])
