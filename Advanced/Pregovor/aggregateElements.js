function elements(input) {
    let sumTotal = sum(input);
    let text = concatenate(input);
    let inverseSum = reverseSum(input);
    console.log(sumTotal);
    console.log(inverseSum);
    console.log(text);
    function sum(input) {
        let sum = 0;
        for (let num of input) {
            sum += num;
        }
        return sum;
    }

    function concatenate(input) {
        let text = '';
        for (let num of input) {
            text += num;
        }
        return text;
    }

    function reverseSum(input) {
        let sum = 0;
        for (let num of input) {
            sum += (1 / num);
        }
        return sum;
    }
}

elements([1, 2, 3]);