function heartDelivery(arr) {
    let neighborhood = arr[0].split('@');
    let currentIndex = 0;
    let placesWithValentinesDay = 0;
    let checkForDaysWithValentine = [];
    for (let i = 1; i < arr.length; i++) {
        let jumpAndLength = arr[i].split(' ');
        let jumpCommand = jumpAndLength[0];
        let jumpLength = jumpAndLength[1];
        if (jumpCommand === 'Jump') {
            currentIndex += Number(jumpLength);
            if (currentIndex > neighborhood.length - 1) {
                currentIndex = 0;
            }
            neighborhood[currentIndex] = Number(neighborhood[currentIndex] - 2);
            if (neighborhood[currentIndex] <= 0) {
                if (!checkForDaysWithValentine.includes(currentIndex)) {
                    console.log(`Place ${currentIndex} has Valentine's day.`);
                    checkForDaysWithValentine.push(currentIndex);
                    placesWithValentinesDay += 1;
                } else {
                    console.log(`Place ${currentIndex} already had Valentine's day.`);
                }
            }
        } else {
            break;
        } 

    }
    console.log(`Cupid's last position was ${currentIndex}.`);
    if (placesWithValentinesDay === neighborhood.length) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${(neighborhood.length - placesWithValentinesDay)} places.`);
    }
}
heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])

