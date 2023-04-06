function pascalCaseSplitter(text) {
    let arr = [];
    let currentWord = text[0];
    for (let i = 1; i <= text.length; i++) {
        if (i === text.length) {
            arr.push(currentWord);
            break;
        }
        if (text[i] === text[i].toLowerCase()) {
            currentWord += text[i];
        } else {
            arr.push(currentWord);
            currentWord = '';
            currentWord += text[i];
        }       
    }
    console.log(arr.join(', '));
}

pascalCaseSplitter('ThisIsSoAnnoyingToDo')