function perfectNumber(num) {
    let sum = 0;
    let dividorsSum = dividors(num);
    if (sum === num || num === (sum + num) / 2) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
    function dividors(num) {
        // let sum = 0;
        let numString = num.toString();
        for (let i = 1; i <= 100000000; i++) {
            if (i != num) {
                if (num % i === 0) {
                    sum += i;
                }
            }
        }
        return sum;
    }
}
perfectNumber(28);