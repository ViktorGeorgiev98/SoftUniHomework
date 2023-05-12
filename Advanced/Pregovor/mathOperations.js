function mathOperations(num1, num2, operator) {
    let result;
    if (operator === '+'){
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else if (operator === '**') {
        result = Math.pow(num1, num2);
    } else if (operator === '%') {
        result = num1 % num2;
    }

    console.log(result);
}

mathOperations(5, 6, '+');