function trainingRoom(input) {
    let lenght = Number(input[0]);
    let widght = Number(input[1]);
    let lenghtCm = lenght * 100;
    let widghtCm = widght * 100;
    let widghtPlaces = Math.floor((widghtCm - 100) / 70);
    let lenghtPlaces = Math.floor(lenghtCm / 120);
    let places = widghtPlaces * lenghtPlaces - 3;
    console.log(places)
}
trainingRoom(["15", "8.9"])