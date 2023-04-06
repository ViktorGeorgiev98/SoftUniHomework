function division(input) {
    let numberOfNumbers = Number(input[0]);
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    for (let n = 1; n <= numberOfNumbers; n++) {
        let number = Number(input[n]);
        if (number % 2 === 0) {
            p1Counter += 1;
        }
        if (number % 3 === 0) {
            p2Counter += 1;
        }
        if (number % 4 === 0) {
            p3Counter += 1;
        }
    }
    let p1Percentage = p1Counter / numberOfNumbers * 100;
    let p2Percentage = p2Counter / numberOfNumbers * 100;
    let p3Percentage = p3Counter / numberOfNumbers * 100;
    console.log(`${p1Percentage.toFixed(2)}%`);
    console.log(`${p2Percentage.toFixed(2)}%`);
    console.log(`${p3Percentage.toFixed(2)}%`);
}
division(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])
