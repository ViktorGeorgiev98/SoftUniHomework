function passwordGenerator(input) {
    let n = Number(input[0]);
    let l = Number(input[1]);
    let charSymbol1 = '';
    let  charSymbol2 = '';
    let str = "";
    let array = [];
    for (let symbol1 = 1; symbol1 <= n; symbol1++) {
        for (let symbol12 = 1; symbol12 <= n; symbol12++) {
            for (let symbol3 = 1; symbol3 <= l; symbol3++) {
                if (symbol3 === 1) {
                    charSymbol1 = 'a';
                } else if (symbol3 === 2) {
                    charSymbol1 = 'b';
                } else if (symbol3 === 3) {
                    charSymbol1 = 'c';
                } else if (symbol3 === 4) {
                    charSymbol1 = 'd';
                }
                for (let symbol4 = 1; symbol4 <= l; symbol4++) {
                    if (symbol4 === 1) {
                        charSymbol2 = 'a';
                    } else if (symbol4 === 2) {
                        charSymbol2 = 'b';
                    } else if (symbol4 === 3) {
                        charSymbol2 = 'c';
                    } else if (symbol4 === 4) {

                        charSymbol2 = 'd';
                    }
                    for (let symbol5 = 1; symbol5 <= n; symbol5++) {
                        if (symbol5 > symbol1 && symbol5 > symbol12) {
                            let result = `${symbol1}${symbol12}${charSymbol1}${charSymbol2}${symbol5}`;
                            // str += `${symbol1}${symbol12}${charSymbol1}${charSymbol2}${symbol5}`;
                            // console.log(`${symbol1}${symbol12}${charSymbol1}${charSymbol2}${symbol5} `);
                            // str += `${symbol1}${symbol12}${charSymbol1}${charSymbol2}${symbol5}` + "";
                            // str += symbol1 + symbol12 + charSymbol1 + charSymbol2 + symbol5 + "";
                            array.push(result);
                            // console.log(result);
                            // str = symbol1 + symbol12 + charSymbol1 + charSymbol2 + symbol5;
                            // console.log(str + '');

                        }
                        // console.log(str);
                        // str = '';
                    }
                }
            }
        } 
    }
    str = array.join(' ');
    console.log(str);
    // console.log();
    // return str;
}
passwordGenerator(["3", "1"]);