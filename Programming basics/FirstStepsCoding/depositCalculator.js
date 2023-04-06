function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualIntRate = Number(input[2]);
    let sum = depositSum + depositPeriod * ((depositSum * annualIntRate / 100) / 12);
    console.log(sum);

}