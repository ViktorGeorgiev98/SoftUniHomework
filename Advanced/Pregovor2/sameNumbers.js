function sameNumbers(num) {
    let numAsString = num.toString();
    let sumNumbers = sum(numAsString);
    let result = sameOrNot(numAsString);
    console.log(result);
    console.log(sumNumbers);

    function sum(numAsString) {
        let sum = 0;
        for (let num of numAsString) {
            sum += Number(num);
        }

        return sum;
    }

    function sameOrNot(numAsString) {
        let trueOrFalse = true;
        let firstChar = numAsString[0];
        for (let num of numAsString) {
            if (num != firstChar) {
                trueOrFalse = false;
            }
        }

        return trueOrFalse;
    }
}

sameNumbers(2222222);