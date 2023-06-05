function tickets (inputArr, str) {
    const sortingParam = str;
    let finalArr = [];
    class Ticket {
        constructor (destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for (let trip of inputArr) {
        let [destinationForTrip, priceForTrip, statusOfTrip] = trip.split('|');
        priceForTrip = Number(priceForTrip).toFixed(1);
        let currentTicket = new Ticket(destinationForTrip, priceForTrip, statusOfTrip);
        finalArr.push(currentTicket);
        // console.log(currentTicket.destination);
    }
    let sorted = sortArray(finalArr, str);
    // console.log(sorted);
    return sorted;

    function sortArray (arr, sortingParam) {
        let sortedArr = [];
        if (sortingParam === 'destination') {
            sortedArr = arr.sort((a, b) => (a.destination).localeCompare(b.destination));
        } else if (sortingParam === 'price') {
            sortedArr = arr.sort((a, b) => a.price - b.price);
        } else if (sortingParam === 'status') {
            sortedArr = arr.sort((a, b) => (a.status).localeCompare(b.status));
        }
        return sortedArr;
        // console.log(sorted)
    }
}

tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'
);