function rounding(num, decimal) {
    // num = Number(num);
    // decimal = Number(decimal);
    if (decimal > 15) {
        decimal = 15;
    }
    num = num.toFixed(decimal);
    console.log(parseFloat(num));
}
rounding(['3.1415926535897932384626433832795', '2']);