function sumEven(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 === 0) {
            result += Number(arr[i]);
        }
    }
    console.log(result);
}
sumEven(['2','4','6','8','10'])