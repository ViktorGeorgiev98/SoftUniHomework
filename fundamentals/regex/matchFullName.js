function matchFullName(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    // \b means that the regex will search only for what is between the \b symbols
    // [] is looking for elements between what is specified inside
    // + means one or more elements
    // /g means all matches
    let result = input.match(pattern);
    console.log(result.join(' '));
}

matchFullName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov');