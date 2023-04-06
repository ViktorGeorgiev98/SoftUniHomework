function repeatString(text, repeatCount) {
    let repeatString2 = repeat(text, repeatCount);
    console.log(repeatString2);

    function repeat(text, repeatCount) {
        return text.repeat(repeatCount);
    }
}
repeatString("abc", 3);