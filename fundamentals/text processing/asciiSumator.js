function asciiSumator(input) {
    let sum = 0;
    let start = input.shift();
    start = start.charCodeAt(0);
    let end = input.shift();
    end = end.charCodeAt(0);
    let startingPoint = 0;
    let endingPoint = 0;
    if (start < end) {
        startingPoint = start;
        endingPoint = end;
    } else {
        startingPoint = end;
        endingPoint = start;
    }
    let string = input.shift();
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) > startingPoint && string.charCodeAt(i) < endingPoint) {
            let currentResult = string.charCodeAt(i);
            sum += currentResult;
        }
    }
    console.log(sum);
}

asciiSumator(['.',

'@',

'dsg12gr5653feee5']);


asciiSumator(['?',

'E',

'@ABCEF'])


asciiSumator(['a',

'1',

'jfe392$#@j24ui9ne#@$'])