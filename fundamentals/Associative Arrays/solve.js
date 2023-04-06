function solve() {
    console.log(square());
}


solve();



function square() {
    let string = ' ';
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            string += '*';
        }
        string += '\n ';
    }
    return string;
}