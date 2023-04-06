function sortBy2Criteria(arr) {
    let newArr = arr.sort((a, b) => {
        if (a.length - b.length === 0) {
            return a.localeCompare(b);
        }
        return a.length - b.length
    });
    console.log(newArr.join('\n'));
}
sortBy2Criteria(['alpha',

'beta',

'gamma'])