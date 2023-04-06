function substring(word, start, count) {
    let result = word.substring(start, start + count);
    // let result = word.slice(start, end + 1);
    console.log(result);
}

substring('SkipWord', 4, 7);