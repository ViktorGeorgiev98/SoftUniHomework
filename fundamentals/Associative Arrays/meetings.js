function meetings(appointments) {
    let list = {};
    for(let appointment of appointments) {
        let [day, name] = appointment.split(' ');
        if (list.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            list[day] = name;
        }
    }

    for (let appointment in list) {
        console.log(`${appointment} -> ${list[appointment]}`);
    }
}

meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim']);