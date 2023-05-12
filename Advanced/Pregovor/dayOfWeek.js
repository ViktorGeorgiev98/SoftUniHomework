function day(day) {
    console.log(checkDay(day));
    function checkDay(day) {
        let num = 0;
        if (day === 'Monday') {
            num = 1;
        } else if (day === 'Tuesday') {
            num = 2;
        } else if (day === 'Wednesday') {
            num = 3;
        } else if (day === 'Thursday') {
            num = 4;
        } else if (day === 'Friday') {
            num = 5;
        } else if (day === 'Saturday') {
            num = 6;
        } else if (day === 'Sunday') {
            num = 7;
        } else {
            num = 'error';
        }
        return num;
    }
}
day('Monday');