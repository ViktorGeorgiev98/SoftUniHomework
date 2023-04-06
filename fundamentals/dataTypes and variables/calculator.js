function calculator(num, oper, num2) {
    let result = 0;
    if (oper === '+') {
        result = num + num2;
    } else if (oper === '-') {
        result = num - num2;
    } else if (oper === '/') {
        result = num / num2;
    } else if (oper === '*') {
        result = num * num2;
    }
    console.log(result.toFixed(2));
}
calculator(25.5,

    '-',
    
    3)