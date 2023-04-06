function requiredReading(numberOfPages, pagesPerHour, daysToReadBook) {
    let hoursNeeded = numberOfPages / pagesPerHour;
    let hoursePerDay = hoursNeeded / daysToReadBook;
    console.log(hoursePerDay);
}
requiredReading(212, 20 , 2);
requiredReading(432, 15, 4);