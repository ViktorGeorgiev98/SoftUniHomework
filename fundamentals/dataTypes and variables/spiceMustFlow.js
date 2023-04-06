function spice(startingYield) {
    let days = 0;
    let totalSpice = startingYield;
    let spiceHarvested = 0;
    while (totalSpice >= 100) {
        days += 1;
        spiceHarvested += totalSpice;
        totalSpice -= 10;
        spiceHarvested -= 26;
    }
    spiceHarvested -= 26;
    if (spiceHarvested < 0) {
        spiceHarvested = 0;
    }
    console.log(days);
    console.log(spiceHarvested);
}
spice(30);