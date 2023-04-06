function sequence(input) {
    let number = Number(input[0]);
    let index = 1;
    let current = 1;
    while (true) {
        // console.log(current)
        if (current > number) {
            break;
        }
        console.log(current)
        index ++;
        current = current * 2 + 1;
    }
}
sequence(["3"])