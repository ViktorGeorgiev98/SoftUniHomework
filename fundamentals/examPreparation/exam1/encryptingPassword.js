function encryptingPassword(input) {
    let countOfInputs = Number(input.shift());
    let pattern = /([A-z-Z!-\/:-@\-`]+)>(?<numbers>[1-9]+)\|(?<smallLetters>[a-z]+)\|(?<bigLetters>[A-Z]+)\|(?<symbols>[A-z-Z!-\/:;=?@\-`]+)<\1/;
    for (let i = 0; i < countOfInputs; i++) {
        if (pattern.test(input[i])) {
            let currentPassword = pattern.exec(input[i]);
            let password = currentPassword.groups.numbers + currentPassword.groups.smallLetters + currentPassword.groups.bigLetters + currentPassword.groups.symbols;
            console.log(`Password: ${password}`);
        } else {
            console.log('Try another password!');
        }
    }
}

encryptingPassword(["5",
"aa>111|mqu|BAU|mqu<aa",
"()>111!aaa!AAA!^&*<()",
"o>088|abc|AAA|***<o",
"asd>asd|asd|ASD|asd<asd",
"*>088|zzzz|ZzZ|123<*"])
;