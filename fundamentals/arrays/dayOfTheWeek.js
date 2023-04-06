function dayOfTheWeek(num) {
    let daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
        console.log('Invalid day!');
    } else {
        console.log(daysOfTheWeek[num - 1]);
    }
}
dayOfTheWeek(11);