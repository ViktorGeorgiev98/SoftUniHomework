function workingTime(input) {
    let hourOfDay = Number(input[0]);
    let day = input[1];
    if (day == "Monday" 
    || day == "Tuesday" 
    || day == "Wednesday" 
    || day == "Thursday" 
    || day == "Friday" 
    || day == "Saturday") {
        if (hourOfDay >= 10 && hourOfDay <=18) {
            console.log("open");
        } else {
            console.log("closed");
        }
    } else {
        console.log("closed")
    }
}
workingTime(["19", "Friday"])