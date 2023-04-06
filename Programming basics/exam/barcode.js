function barcode(input) {
    let startingNumber = input[0];
    let endingNumber = input[1];
    let array = [];
    let number = '';
    let result = '';
    for (let cifra1 = Number(startingNumber[0]); cifra1 <= Number(endingNumber[0]); cifra1++) {
        for (let cifra2 = Number(startingNumber[1]); cifra2 <= Number(endingNumber[1]); cifra2++) {
            for (let cifra3 = Number(startingNumber[2]); cifra3 <= Number(endingNumber[2]); cifra3++) {
                for (let cifra4 = Number(startingNumber[3]); cifra4 <= Number(endingNumber[3]); cifra4++) {
                    if (cifra1 % 2 != 0) {
                        if (cifra2 % 2 != 0) {
                            if (cifra3 % 2 != 0) {
                                if (cifra4 % 2 != 0) {
                                    // number = `${cifra1}${cifra2}${cifra3}${cifra4}`;
                                    // array.push(number);
                                    array.push(`${cifra1}${cifra2}${cifra3}${cifra4}`);
                                    // result = array.join(' ');
                                    // console.log(result);
                                    
                    
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    result = array.join(' ');
    console.log(result);
}
barcode(["3256",
"6579"])
