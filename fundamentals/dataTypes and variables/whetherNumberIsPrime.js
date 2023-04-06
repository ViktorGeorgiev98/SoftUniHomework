function primeNumber(num) {
    if (num % num === 0 && num % 1 === 0 && num % 2 != 0 && num % 3 != 0) {
        console.log('true');
    } else {
        console.log('false');
    }
}
primeNumber(7)
primeNumber(8)
primeNumber(81)