function vacationBooks(input) {
    let pagesPerBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysForBook = Number(input[2]);
    let hoursNeededPerBook = pagesPerBook / pagesPerHour;
    let hoursPerDay = hoursNeededPerBook / daysForBook;
    console.log(hoursPerDay);
}