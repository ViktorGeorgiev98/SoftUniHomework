function rotate(arr, num) {
    for (let i = 1; i <= num; i++) {
        let currentElement = arr.pop();
        arr.unshift(currentElement);
    }
    console.log(arr.join(' '));
}

rotate(['1',
'2',
'3',
'4'],
2
);