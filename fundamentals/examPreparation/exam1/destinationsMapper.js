function destinationsMapper(input) {
    let pattern = /([=\/])(?<destination>[A-Z]{1}[A-z-Z]{2,})\1/g;
    let pattern2 = /[A-z-Z]{3,}/;
    let points = 0;
    let matches = input.match(pattern);
    let endMatches = [];
    // let matches = pattern.exec(input);
    if (matches) {
        for (let match of matches) {
            let currentMatch = pattern2.exec(match);
            currentMatch = currentMatch.join('');
            points += currentMatch.length;
            endMatches.push(currentMatch);
        }
    }

    console.log(`Destinations: ${endMatches.join(', ')}`);
    console.log(`Travel Points: ${points}`);

}

destinationsMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");