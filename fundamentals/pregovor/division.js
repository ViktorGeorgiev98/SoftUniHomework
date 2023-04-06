function division(num) {
    let number = 0;
    if (num % 10 === 0) {
        number = 10;
        console.log(`The number is divisible by ${number}`);
    } else if (num % 7 === 0) {
        number = 7;
        console.log(`The number is divisible by ${number}`);
    } else if (num % 6 === 0) {
        number = 6;
        console.log(`The number is divisible by ${number}`);
    } else if (num % 3 === 0) {
        number = 3;
        console.log(`The number is divisible by ${number}`);
    } else if (num % 2 === 0) {
        number = 2;
        console.log(`The number is divisible by ${number}`);
    } else {
        console.log('Not divisible');
    }
}
division('0');