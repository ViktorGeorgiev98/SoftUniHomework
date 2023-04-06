function firstLastKNumbers(arr) {
    let numForSlicing = Number(arr.shift());
    let firstElements = arr.slice(0, numForSlicing);
    let lastElements = arr.slice(arr.length - numForSlicing, arr.length);
    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));
}
firstLastKNumbers([2,

    7, 8, 9])