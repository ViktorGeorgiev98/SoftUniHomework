function schoolCamp(input) {
    let season = input[0];
    let groupType = input[1];
    let studentsNumber = Number(input[2]);
    let nightsNumber = Number(input[3]);
    let sport = '';
    let price = 0;
    let totalPrice = 0;
    if (season === 'Winter') {
        if (groupType === 'girls') {
            sport = 'Gymnastics';
            price = 9.60;
        } else if (groupType === 'boys') {
            sport = 'Judo';
            price = 9.60; 
        } else if (groupType === 'mixed') {
            sport = 'Ski';
            price = 10;
        }
    } else if (season === 'Spring') {
        if (groupType === 'girls') {
            sport = 'Athletics';
            price = 7.20;
        } else if (groupType === 'boys') {
            sport = 'Tennis';
            price = 7.20; 
        } else if (groupType === 'mixed') {
            sport = 'Cycling';
            price = 9.50;
        }
    } else if (season === 'Summer') {
        if (groupType === 'girls') {
            sport = 'Volleyball';
            price = 15;
        } else if (groupType === 'boys') {
            sport = 'Football';
            price = 15; 
        } else if (groupType === 'mixed') {
            sport = 'Swimming';
            price = 20;
        }
    }
    if (studentsNumber >= 50) {
        totalPrice = (studentsNumber * nightsNumber * price) * 0.50;
    } else if (studentsNumber < 50 && studentsNumber >= 20) {
        totalPrice = (studentsNumber * nightsNumber * price) * 0.85;
    } else if (studentsNumber < 20 && studentsNumber >= 10) {
        totalPrice = (studentsNumber * nightsNumber * price) * 0.95;
    } else {
        totalPrice = (studentsNumber * nightsNumber * price) * 1;
    }
    console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);
}
schoolCamp(["Winter", "mixed", "9", "15"])