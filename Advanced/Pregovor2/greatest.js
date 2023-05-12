function great(num1, num2) {
    let dividor = 1;
    for (let i = 1; i <= 1000; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            if (dividor < i) {
                dividor = i;
            }
        }
    } 

    console.log(dividor);
}

great(2154, 458);