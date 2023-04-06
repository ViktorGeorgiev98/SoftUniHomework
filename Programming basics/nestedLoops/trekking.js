function trekking(input) {
    let totalNumberPeople = 0;
    let montblancPeople = 0;
    let everestPeople = 0;
    let musalaPeople = 0;
    let K2People = 0;
    let kilimandjaroPeople = 0;
    let groupsNumber = Number(input[0]);
    for (let group = 1; group <= groupsNumber; group++) {
        let numberOfPeople = Number(input[group]);
        totalNumberPeople += numberOfPeople;
        if (numberOfPeople <= 5) {
            musalaPeople += numberOfPeople;
        } else if (numberOfPeople > 5 && numberOfPeople <= 12) {
            montblancPeople += numberOfPeople;
        } else if (numberOfPeople > 12 && numberOfPeople <= 25) {
            kilimandjaroPeople += numberOfPeople;
        } else if (numberOfPeople > 25 && numberOfPeople <= 40) {
            K2People += numberOfPeople;
        } else if (numberOfPeople > 40) {
            everestPeople += numberOfPeople;
        }

    }
    let musalaPercentage = musalaPeople / totalNumberPeople * 100;
    let K2Percentage = K2People / totalNumberPeople * 100;
    let everestPercentage = everestPeople / totalNumberPeople * 100;
    let kilimandjaroPercentage = kilimandjaroPeople / totalNumberPeople * 100;
    let montblancPercentage = montblancPeople / totalNumberPeople * 100;
    console.log(`${musalaPercentage.toFixed(2)}%`);
    console.log(`${montblancPercentage.toFixed(2)}%`);
    console.log(`${kilimandjaroPercentage.toFixed(2)}%`);
    console.log(`${K2Percentage.toFixed(2)}%`);
    console.log(`${everestPercentage.toFixed(2)}%`);
}
trekking(["10",
"10","5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])

