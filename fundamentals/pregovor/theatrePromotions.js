function theatre(typeOfDay, age) {
    let price = 0;
    let ageIsValid = true;
    if (age >= 0 && age <= 18) {
        if(typeOfDay === 'Weekday') {
            price = 12;
        } else if (typeOfDay === 'Weekend') {
            price = 15;
        } else if (typeOfDay === 'Holiday') {
            price = 5;
        }
    } else if (age > 18 && age <= 64) {
        if(typeOfDay === 'Weekday') {
            price = 18;
        } else if (typeOfDay === 'Weekend') {
            price = 20;
        } else if (typeOfDay === 'Holiday') {
            price = 12;
        }
    } else if (age > 64 && age <= 122) {
        if(typeOfDay === 'Weekday') {
            price = 12;
        } else if (typeOfDay === 'Weekend') {
            price = 15;
        } else if (typeOfDay === 'Holiday') {
            price = 10;
        }
    } else {
        ageIsValid = false;
        console.log('Error!');
    }
    if (ageIsValid != false) {
        console.log(`${price}$`);
    }
}