function sumFirstAndLast(arr) {
    let num1 = Number(arr[0]);
    let num2 = Number(arr[arr.length - 1]);
    let result = num1 + num2;
    console.log(result);
}
sumFirstAndLast(['5', '10']);