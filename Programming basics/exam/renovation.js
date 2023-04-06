function renovation(input) {
    let height = Number(input[0]);
    let widght = Number(input[1]);
    let percentageNotToBePainted = Number(input[2]);
    let index = 3;
    let command = input[index];
    let litres = 0;
    let paintedSquareMeters = 0;
    let totalMeters = Math.ceil(((height * widght) * 4) * (1 - percentageNotToBePainted / 100));
    while (true) {
        if (command === 'Tired!') {
            break;
        } else {
            litres = Number(command);
        }
        paintedSquareMeters += litres;
        if (paintedSquareMeters >= totalMeters) {
            break;
        }
        index++;
        command = input[index];

    }
    if (command === 'Tired!') {
        let diff = Math.ceil(Math.abs(paintedSquareMeters - totalMeters));
        console.log(`${diff} quadratic m left.`);
    } else if (paintedSquareMeters > totalMeters) {
        let diff = Math.ceil(Math.abs(paintedSquareMeters - totalMeters));
        console.log(`All walls are painted and you have ${diff} l paint left!`);
    } else if (totalMeters === paintedSquareMeters) {
        console.log(`All walls are painted! Great job, Pesho!`);
    }
}
renovation(["2",
"3",
"25",
"6",
"7",
"8"])
;