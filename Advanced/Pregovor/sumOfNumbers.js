function sum(num1, num2) {
    let result = 0;
    num1 = Number(num1);
    num2 = Number(num2);
    for (let i = num1; i <= num2; i++) {
        result += i;
    }
    console.log(result);
}

sum('1', '5');