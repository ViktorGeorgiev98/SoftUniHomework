function even(arr) {
    let text = '';
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            text += arr[i] + ' ';
        }
    }
    console.log(text);
}

even(['20', '30', '40',
'50', '60']);