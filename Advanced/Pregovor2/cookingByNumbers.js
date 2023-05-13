function cooking(num, operation1, operation2, operation3, operation4, operation5) {
    let operations = [];
    num = Number(num);
    operations.push(operation1, operation2, operation3, operation4, operation5);
    for (let op of  operations) {
        num = changeNumber(num, op);
    }

    
    function changeNumber(num, operation) {
        if (operation === 'chop') {
            num /= 2;
            console.log(num);
        } else if (operation === 'dice') {
            num = Math.sqrt(num);
            console.log(num);
        } else if (operation === 'spice') {
            num += 1;
            console.log(num);
        } else if (operation === 'bake') {
            num *= 3;
            console.log(num);
        } else if (operation === 'fillet') {
            num *= 0.80;
            console.log(num.toFixed(1));
        }
        return num
    }
}

cooking('9', 'dice', 'spice', 'chop', 'bake',
'fillet');