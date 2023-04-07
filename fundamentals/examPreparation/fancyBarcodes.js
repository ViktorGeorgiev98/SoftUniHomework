function fancyBarcodes(input) {
    let pattern = /@#+(?<productName>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    let pattern2 = /[0-9]+/g;;
    let countOfBarcodes = Number(input.shift());
    for (let i = 0; i < countOfBarcodes; i++) {
        let currentBarcodeNumber = '';
        if (pattern.test(input[i])) {
            let currentMatch = pattern.exec(input[i]);
            if (pattern2.test(currentMatch.groups.productName)) {
                let arr = currentMatch.groups.productName.match(pattern2)
                for (let char of arr) {
                    currentBarcodeNumber += '' + char;
                }
            } else {
                currentBarcodeNumber = '00';
            }
            console.log(`Product group: ${currentBarcodeNumber}`);
        } else {
            console.log('Invalid barcode');
        }
    }

}

fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])


