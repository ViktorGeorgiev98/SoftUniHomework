function searchForANumber(arr, numbersToManipulate) {
    let countOfNumbersToTake = Number(numbersToManipulate[0]);
    let countOfNumersToRemove = Number(numbersToManipulate[1]);
    let searchedNumber = Number(numbersToManipulate[2]);
    let newArr = arr.splice(0, countOfNumbersToTake);
    // let newArr = arr.splice(1, countOfNumersToRemove);
    newArr.splice(0, countOfNumersToRemove);
    // console.log(newArr);
    let counter = 0;
    for (let i = 0; i < newArr.length; i++) {
        if (Number(newArr[i]) == searchedNumber) {
            counter += 1;
        }
    }
    // console.log(`Number ${searchForANumber} occurs ${counter} times.`);
    // console.log('1');
    console.log(`Number ${searchedNumber} occurs ${counter} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],[5, 2, 3]);