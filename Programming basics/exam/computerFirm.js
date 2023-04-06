function computerFirm(input) {
    let numberOfComputers = Number(input[0]);
    let rating = 0;
    let sales = 0;
    let allSales = 0;
    let allRating = 0;
    for (let i = 1; i <= numberOfComputers; i++) {
        let number = input[i];
        let rating = Number(number[2]);
        let possibleSales = Number(number[0] + number[1]);
        if (rating === 2) {
            sales = 0;
        } else if (rating === 3) {
            sales = possibleSales * 0.5;
        } else if (rating === 4) {
            sales = possibleSales * 0.70;
        } else if (rating === 5) {
            sales = possibleSales * 0.85;
        } else if (rating === 6) {
            sales = possibleSales;
        }
        allSales += sales;
        allRating += rating;
        sales = 0;

    }
    let averageRating = allRating / numberOfComputers;
    console.log(allSales.toFixed(2));
    console.log(averageRating.toFixed(2));
}
computerFirm(["5",
"122",
"156",
"202",
"214",
"185"])



