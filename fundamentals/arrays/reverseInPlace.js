function reverseInPlace(arr) {
    let newArr = [];
    for (let i = arr.length; i >= 0; i--) {
        let element = arr[i];
        newArr.push(element);
    }
    console.log(newArr.join(' '));
}
reverseInPlace(['abc', 'def', 'hig',

'klm', 'nop']);