function filmRating(input) {
    let movieNumber = Number(input[0]);
    let index = 1;
    let totalRating = 0;
    let minimumRating = Number.MAX_SAFE_INTEGER;
    let maximumRating = Number.MIN_SAFE_INTEGER;
    let movieCounter = 0;
    let currentRating = 0;
    let maxRatingMovie = '';
    let minimumRatingMovie = '';
    while (true) {
        movieCounter += 1;
        let movieName = input[index];
        // currentMovie = movieName;
        index++;
        let filmRating = Number(input[index])
        currentRating = filmRating;
        index++;
        totalRating += filmRating;
        if (currentRating < minimumRating) {
            minimumRating = currentRating;
            minimumRatingMovie = movieName;
        }
        if (currentRating > maximumRating) {
            maximumRating = currentRating;
            maxRatingMovie = movieName;
        }
        if (movieCounter >= movieNumber) {
            break;
        }
        


    }
    let averageRating = totalRating / movieNumber;
    console.log(`${maxRatingMovie} is with highest rating: ${maximumRating.toFixed(1)}`);
    console.log(`${minimumRatingMovie} is with lowest rating: ${minimumRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);
}
filmRating(["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"])

