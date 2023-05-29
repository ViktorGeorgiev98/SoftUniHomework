function solve(arr, type) {
    if (type === 'asc') {
        arr = arr.sort((a, b) => a- b);
    } else if (type === 'desc') {
        arr = arr.sort((a,b) => b - a);
    }

    // console.log(arr);
    return arr;
}

solve([14, 7, 17, 6, 8], 'desc');