function cinemaTickets(input) {
    let command = input[0];
    // let command = input[0];
    let index = 1;
    // let command = input[index];
    // index++;
    let movieName = '';
    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;
    let ticketCounter = 0;
    let totalTickets = 0;
    while (true) {
        // let command = input[index];
        // index++;
        if (command === 'Finish') {
            break;
        } else {
            movieName = command;
        }
        let freeSeats = Number(input[index])
        index++;
        // let counterSeats = 0;
        // for (let seat = index + 1; seat <= freeSeats + index; seat++) {
        while (true) {
            let ticketType = input[index];
            if (ticketType === 'End') {
                break;
            }
            // if (ticketCounter >= freeSeats) {
            //     break;
            // }
            ticketCounter += 1;
            if (ticketType === 'student') {
                studentTicket += 1;
            } else if (ticketType === 'standard') {
                standardTicket += 1;
            } else if (ticketType === 'kid') {
                kidTicket += 1;
            }
            if (ticketCounter >= freeSeats) {
                break;
            }
            index++;
            ticketType = input[index];
        }
            // let ticketType = input[seat];
            // if (ticketType === 'End') {
            //     break;
            // }
            // ticketCounter += 1;
            // if (ticketType === 'student') {
            //     studentTicket += 1;
            // } else if (ticketType === 'standard') {
            //     standardTicket += 1;
            // } else if (ticketType === 'kid') {
            //     kidTicket += 1;
            // }
        
        totalTickets += ticketCounter;
        let percentageHall = ticketCounter / freeSeats * 100;
        console.log(`${movieName} - ${percentageHall.toFixed(2)}% full.`);
        ticketCounter = 0;
        index++;
        command = input[index];
        index++;
    
    }
    if(command === 'Finish') {
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentTicket / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTicket / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTicket / totalTickets * 100).toFixed(2)}% kids tickets.`);
    }
    
}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
