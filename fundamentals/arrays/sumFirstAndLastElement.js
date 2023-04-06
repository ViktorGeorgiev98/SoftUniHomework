function sum(input) {
    let lastElement = Number(input.length - 1);
    console.log(Number(input[0]) + Number(input[lastElement]));
}
sum([20, 30, 40]);