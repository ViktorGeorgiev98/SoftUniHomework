function travelAgency(input) {
    let city = input[0];
    let package = input[1];
    let vip = input[2];
    let days = Number(input[3]);
    let price = 0;
    if (city === 'Bansko' || city === 'Borovets') {
        if (package === 'noEquipment') {
            price = 80;
            if (vip === 'yes') {
                price = 80 * 0.95;
            }
        } else if (package === 'withEquipment') {
            price = 100;
            if (vip === 'yes') {
                price = 100 * 0.90;
            }
        }
    } else if (city === 'Varna' || city === 'Burgas') {
        if (package === 'withBreakfast') {
            price = 130;
            if (vip === 'yes') {
                price *= 0.88;
            }
        } else if (package === 'noBreakfast') {
            price = 100;
            if (vip === 'yes') {
                price *= 0.93;
            }
        }
    }
    let totalPrice = days * price;
    if (days > 7) {
        totalPrice = (days - 1) * price;
    }
    if (days < 1) {
        console.log('Days must be positive number!');
    } else if (city != 'Burgas' 
    && city != 'Bansko' 
    && city != 'Borovets' 
    && city != 'Varna' 
    || package != 'noEquipment' 
    && package != 'withEquipment' 
    && package != 'noBreakfast' 
    && package != 'withBreakfast') {
        console.log('Invalid input!');
    } else {
        console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
    }
}
travelAgency(["Varna", "withBreakfast", "no", "0"]);