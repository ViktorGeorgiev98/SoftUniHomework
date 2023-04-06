function rightPlace(text1, character, text2) {
    let replacedText = text1.replace('_', character);
    if (replacedText === text2) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'I','Strong');
rightPlace('Str_ng', 'i','String');