function vacation(groupNumber, groupType, dayOfWeek) {
    // let groupNumber = Number(input[0]);
    // let groupType = input[1];
    // let dayOfWeek = input[2];
    let price = 0;
    if (groupType === 'Students') {
        if (dayOfWeek === 'Friday') {
            price = 8.45;
        } else if (dayOfWeek === 'Saturday') {
            price = 9.80;
        } else if (dayOfWeek === 'Sunday') {
            price = 10.46;
        }
    } else if (groupType === 'Business') {
        if (dayOfWeek === 'Friday') {
            price = 10.90;
        } else if (dayOfWeek === 'Saturday') {
            price = 15.60;
        } else if (dayOfWeek === 'Sunday') {
            price = 16;
        }
    } else if (groupType === 'Regular') {
        if (dayOfWeek === 'Friday') {
            price = 15;
        } else if (dayOfWeek === 'Saturday') {
            price = 20;
        } else if (dayOfWeek === 'Sunday') {
            price = 22.50;
        }
    }
    let totalPrice = groupNumber * price;
    if (groupType === 'Students') {
        if (groupNumber >= 30) {
            totalPrice *= 0.85;
        }
    }
    if (groupType === 'Business') {
        if (groupNumber >= 100) {
            totalPrice = (groupNumber - 10) * price;
        }
    }
    if (groupType === 'Regular') {
        if (groupNumber >= 10 && groupNumber <= 20) {
            totalPrice *= 0.95;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(["40", "Regular", "Saturday"]);