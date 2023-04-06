function palindromeIntegers(arr) {
    let bool = true;
    for (let i = 0; i < arr.length; i++) {
        let arr2 = [];
        let indexString = arr[i].toString();
        let indexSplit = indexString.split("");
        let reversedIndex = indexSplit.reverse();
        let finalIndex = reversedIndex.join("");
        if (finalIndex == arr[i]) {
            console.log(true);
        } else {
            console.log(false);
        }
        // for (let j = indexString.length - 1; j = 0; j--) {
        //     arr2.push(indexString[j]);
        // }
        // let result = arr2.join('');    
        // if (result == arr[i]) {
        //     console.log('true');
        // } else {
        //     console.log('false');
        // }
    }
}
palindromeIntegers([123,323,421,121])