function factorialDivision(num1,num2) {
    factorial1(num1);
    factorial2(num2);
    let finalResult = factorial1(num1) / factorial2(num2);
    console.log(`${finalResult.toFixed(2)}`);




    // function factorial1(num1) {
    //     let result1 = num1;
    //     for (let i = num1 - 1; i >= 1; i--) {
    //         result1 *= i;
    //     }
    //     return result1;
    // } 
    // function factorial2(num2) {
    //     let result2 = num2;
    //     for (let j = num2 - 1; j >= 1; j--) {
    //         result2 *= j;
    //     }
    //     return result2;
    // }
}
function factorial1(num1) {
    let result1 = num1;
    for (let i = num1 - 1; i >= 1; i--) {
        result1 *= i;
    }
    return result1;
} 


function factorial2(num2) {
    let result2 = num2;
    for (let j = num2 - 1; j >= 1; j--) {
        result2 *= j;
    }
    return result2;
}
factorialDivision(6, 2)