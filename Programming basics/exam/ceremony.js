function ceremony(input) {
    let rent = Number(input[0]);
    let statuetkiPrice = rent * 0.7;
    let cateringPrice = statuetkiPrice * 0.85;
    let musicPrice = cateringPrice / 2;
    let totalPrice = rent + statuetkiPrice + cateringPrice + musicPrice;
    console.log(totalPrice.toFixed(2));
}
ceremony(["3500"])