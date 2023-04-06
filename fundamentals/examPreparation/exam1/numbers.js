function numbers(arr) {
    let arr2 = arr.split(' ');
    let average = 0;
    let newArr = [];
    for (let i = 0; i < arr2.length; i++) {
        average += Number(arr2[i]);
    }
    average /= arr2.length;
    for (let i = 0; i < arr2.length; i++) {
        if (Number(arr2[i]) > average) {
            newArr.push(arr2[i]);
        }
    }
    if (newArr.length === 0) {
        console.log('No');
        return
    }
    newArr.sort((a, b) => b -a);
    while (newArr.length > 5) {
        newArr.pop();
    }
    console.log(newArr.join(' '));
}
numbers('1');