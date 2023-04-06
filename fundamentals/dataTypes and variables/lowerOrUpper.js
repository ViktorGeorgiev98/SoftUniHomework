function lowerOrUpper(syllable) {
    if (syllable.toUpperCase() === syllable) {
        console.log('upper-case');
    } else if (syllable.toLowerCase() === syllable) {
        console.log('lower-case');
    }
}
lowerOrUpper('L');
lowerOrUpper('f');