function subtract() {
    let firstNumValue = Number(document.getElementById('firstNumber').value);
    let secondnumValue = Number(document.getElementById('secondNumber').value);
    let sum = firstNumValue - secondnumValue;
    document.getElementById('result').textContent = sum;
}