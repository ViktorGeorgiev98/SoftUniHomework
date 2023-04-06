function footballTournament(input) {
    let stadiumCapacity = Number(input[0]);
    let numberOfFansTotal = Number(input[1]);
    let sectorA = 0;
    let sectorB = 0;
    let sectorV= 0;
    let sectorG = 0;
    for (let fan = 1; fan <= numberOfFansTotal + 1; fan++) {
        let currentFanSerctor = input[fan];
        // A , B, V, G = sectors
        if (currentFanSerctor === 'A') {
            sectorA += 1;
        } else if (currentFanSerctor === 'B') {
            sectorB += 1;
        } else if (currentFanSerctor === 'V') {
            sectorV += 1;
        } else if (currentFanSerctor === 'G') {
            sectorG += 1;
        }
    }
    console.log(`${(sectorA / numberOfFansTotal * 100).toFixed(2)}%`);
    console.log(`${(sectorB / numberOfFansTotal * 100).toFixed(2)}%`);
    console.log(`${(sectorV / numberOfFansTotal * 100).toFixed(2)}%`);
    console.log(`${(sectorG / numberOfFansTotal * 100).toFixed(2)}%`);
    console.log(`${(numberOfFansTotal / stadiumCapacity * 100).toFixed(2)}%`);
}
footballTournament(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);