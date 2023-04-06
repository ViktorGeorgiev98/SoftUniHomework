function x2(input) {
    let index = 0;
    let number = Number(input[index]);
    // let index = 1;
    while (true) {
        let result = number * 2;
        if (number < 0) {
            console.log('Negative number!');
            break;
        }
        console.log(`Result: ${result.toFixed(2)}`);
        index++;
        number = Number(input[index]);
    }
}
x2(["12", "43.2144", "12.3", "543.23", "-20"]);