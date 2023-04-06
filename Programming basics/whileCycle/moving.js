function moving(input) {
    let widght = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let index = 3;
    let space = widght * length * height;
    let luggage = input[index];
    let numberOfLuggage = 0;
    let luggageCounter = 0;
    while (true) {
        if (luggage !== "Done") {
            numberOfLuggage = Number(luggage);
        } else {
            numberOfLuggage = 0;
        }
        luggageCounter += numberOfLuggage;
        if (luggageCounter >= space) {
            let diff = Math.abs(luggageCounter - space);
            console.log(`No more free space! You need ${diff} Cubic meters more.`);
            break;
        }
        if (luggage === "Done") {
            let diff = Math.abs(luggageCounter - space);
            console.log(`${diff} Cubic meters left.`);
            break;
        }
        index++;
        luggage = input[index];

    }
}
moving(["10",

"10",

"2","20", "20", "20", "20", "122"])