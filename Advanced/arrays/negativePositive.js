function test(arr) {
    let result = [];
    for (let el of arr) {
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el)
        }
    }
    for (let el of result) {
        console.log(el);
    }
}

test([3, -2, 0, -1]);