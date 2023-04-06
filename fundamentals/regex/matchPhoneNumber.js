function matchPhoneNumber(input) {
    let string = input.join('');
    let pattern = /\+359([ -])2\1([0-9]{3})\1([0-9]{4})\b/g;
    // \+ the line means that the text will include the plus and it will not be a special symbol
    // () saves something in a group and \1 searches for that group and matches if it exists
    // {} shows exactly how many symbols you want
    let result = string.match(pattern);
    console.log(result.join(', '));
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])