function addAndSubstract(arr) {
    let newArr = arr;
    let arrAfter = [];
    let sumBefore = 0;
    let sumAfter = 0;
    for (let i = 0; i < newArr.length; i++) {
        sumBefore += newArr[i];
    }
    for (let j = 0; j < newArr.length; j++) {
        if (newArr[j] % 2 === 0) {
            newArr[j] += j;
            sumAfter += newArr[j];
            arrAfter.push(newArr[j]);
        } else if (newArr[j] % 2 != 0) {
            newArr[j] -= j;
            sumAfter += newArr[j];
            arrAfter.push(newArr[j]);
        }
    }
    console.log(arrAfter);
    console.log(sumBefore);
    console.log(sumAfter);
}
addAndSubstract([-5, 11, 3, 0, 2]);