function listOfProducts(arr) {
    let counter = 0;
    let sortedArr = arr.sort();
    for (let i = 0; i < sortedArr.length; i++) {
        counter++;
        console.log(`${counter}.${sortedArr[i]}`);
    }
    // console.log(sortedArr.join('\n'));
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions','Apples']);