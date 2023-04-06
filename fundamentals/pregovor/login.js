function login(input) {
    let password = input[0];
    let index = 1;
    let counter = 0;
    let inputPass = '';
    let splitString = password.split("");
    let reverseString = splitString.reverse();
    let reversedPassword = reverseString.join("");
    while (true) {
        inputPass = input[index];
        index++;
        if (inputPass === reversedPassword) {
            console.log(`User ${password} logged in.`);
            break;
        } else {
            counter += 1;
            if (counter != 4) {
                console.log(`Incorrect password. Try again.`);
            }
            if (counter === 4) {
                console.log(`User ${password} blocked!`);
                break;
            }
        }
        inputPass = input[index];
    }
}
login(['Acer','login','go','let me in','recA']);