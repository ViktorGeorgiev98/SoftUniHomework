function sumTable() {
//    get elements
    // debugger
    let result = document.getElementById('sum');
    let nums = document.getElementsByTagName('td');
    let numsArray = Array.from(nums);
    let numsArrayValue = numsArray.map(x => x.textContent);
    // console.log(numsArrayValue);
    // console.log(numsArray);
    // main logic
    let allSum = 0;
    for (let i = 0; i < numsArrayValue.length - 1; i++) {
        if (i % 2 != 0) {
            allSum += Number(numsArrayValue[i]);
        }
        
    }

    result.textContent = allSum;
}