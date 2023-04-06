function histogram(input) {
    let numbersCount = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (let i = 1; i <= numbersCount; i++) {
        let currentNumber = Number(input[i]);
        if (currentNumber < 200) {
            p1 += 1;
        } else if (currentNumber >= 200 && currentNumber < 400) {
            p2 += 1;
        } else if (currentNumber >= 400 && currentNumber < 600) {
            p3 += 1;
        } else if (currentNumber >= 600 && currentNumber < 800) {
            p4 += 1;
        } else if (currentNumber >= 800) {
            p5 += 1;
        }
    }
    let p1Percentage = p1 / numbersCount * 100;
    let p2Percentage = p2 / numbersCount * 100;
    let p3Percentage = p3 / numbersCount * 100;
    let p4Percentage = p4 / numbersCount * 100;
    let p5Percentage = p5 / numbersCount * 100;
    console.log(`${p1Percentage.toFixed(2)}%`)
    console.log(`${p2Percentage.toFixed(2)}%`)
    console.log(`${p3Percentage.toFixed(2)}%`)
    console.log(`${p4Percentage.toFixed(2)}%`)
    console.log(`${p5Percentage.toFixed(2)}%`)
}
histogram(["7", "800", "801", "250", "199", "399", "599", "799"])