function calc() {
//    get elements
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let result = document.getElementById('sum');

    //  main logic
    let sum = num1 + num2;
    result.value = sum;
}
