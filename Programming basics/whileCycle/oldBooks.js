function oldBooks(input) {
    let searchedBook = input[0];
    let numberOfBooksSearched = 0;
    let index = 1;
    let bookIsFound = true;
    while (true) {
        let currentBook = input[index];
        // numberOfBooksSearched += 1;
        if (currentBook === "No More Books") {
            bookIsFound = false;
            break
        }
        if (currentBook === searchedBook) {
            bookIsFound = true;
            break;
        }
        numberOfBooksSearched += 1;
        currentBook = input[index];
        index++;

    }
    if (bookIsFound === true) {
        console.log(`You checked ${numberOfBooksSearched} books and found it.`)
    } else if (bookIsFound === false) {
        console.log(`The book you search is not here!`)
        console.log(`You checked ${numberOfBooksSearched} books.`)
    }

}
oldBooks(["The Spot",

"Hunger Games",

"Harry Potter",

"Torronto",

"Spotify",

"No More Books"])