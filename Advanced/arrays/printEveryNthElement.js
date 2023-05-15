function print(arr, space) {
    let newArr = [];
    for (let i = 0; i < arr.length; i+= space) {
        newArr.push(arr[i]);
    }
    return newArr;
    // for (let el of newArr) {
    //     console.log(el);
    // }
}

print(['5',
'20',
'31',
'4',
'20'],
2
);