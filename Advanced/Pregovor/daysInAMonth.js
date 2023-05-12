function days(month, year) {
    let date = new Date(year, month, 0);
    console.log(date.getDate());
}

days(1, 2012);