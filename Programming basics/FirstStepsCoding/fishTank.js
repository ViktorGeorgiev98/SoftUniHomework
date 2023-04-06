function fishTank(input) {
    let lenghtCm = Number(input[0]);
    let widghtCm = Number(input[1]);
    let heightCm = Number(input[2]);
    let percentage = Number(input[3]);
    let sizeAqua = lenghtCm * widghtCm * heightCm;
    let sizeAquaDm = sizeAqua / 1000;
    let spaceForSand = sizeAquaDm * percentage / 100;
    let finalSpaceAv = sizeAquaDm - spaceForSand;
    console.log(finalSpaceAv);
}