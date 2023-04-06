function furniture(input) {
    let pattern = />>(?<furnitureName>[A-z-Z]+)<<(?<price>[0-9|0-9.]+)!(?<quantity>[0-9]+)/;
    console.log('Bought furniture:');
    let totalMoney = 0;
    for (let line of input) {
        if (line === 'Purchase') {
            break;
        }
        if (pattern.test(line)) {
            let currentResult = pattern.exec(line);
            console.log(currentResult.groups.furnitureName);
            totalMoney += Number(Number(currentResult.groups.price) * Number(currentResult.groups.quantity));
        }
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

furniture(['>>Laptop<<312.2323!3',

'>>TV<<300.21314!5',

'>Invalid<<!5',

'>>TV<<300.21314!20',

'>>Invalid<!5',

'>>TV<<30.21314!5',

'>>Invalid<<!!5',

'Purchase']);