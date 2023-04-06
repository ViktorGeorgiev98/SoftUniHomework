function evenAndOddSubstraction(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 === 0) {
            evenSum += Number(arr[i]);
        } else {
            oddSum += Number(arr[i]);
        }
    }
    console.log(evenSum - oddSum);
}
evenAndOddSubstraction([2,4,6,8,10])