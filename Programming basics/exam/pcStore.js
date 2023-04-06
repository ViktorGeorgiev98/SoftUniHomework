function pcStore(input) {
    let processorPrice = Number(input[0]);
    let videocardPrice = Number(input[1]);
    let ramPrice = Number(input[2]);
    let ramNumber = Number(input[3]);
    let percentageDiscount = Number(input[4]);
    let processorPriceAfterDiscointInLeva = (processorPrice * 1.57); 
    let videoCardPriceAfterDiscointInLeva = (videocardPrice * 1.57);
    let processorFinalPrice = processorPriceAfterDiscointInLeva - processorPriceAfterDiscointInLeva * percentageDiscount;
    let videocardFinalPrice = videoCardPriceAfterDiscointInLeva - videoCardPriceAfterDiscointInLeva * percentageDiscount;
    let ramWholePrice = ramNumber * ramPrice * 1.57;
    let finalPrice = ramWholePrice + processorFinalPrice + videocardFinalPrice;
    console.log(`Money needed - ${finalPrice.toFixed(2)} leva.`)
}
pcStore(["500",
"200",
"80",
"2",
"0.05"]
)