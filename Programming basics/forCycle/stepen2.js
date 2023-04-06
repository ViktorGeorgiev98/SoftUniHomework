function stepen2(input) {
    let number = Number(input[0]);
    for (let power = 0; power <= number; power += 2) {
        console.log(2**power);
    }
}
stepen2(["7"])