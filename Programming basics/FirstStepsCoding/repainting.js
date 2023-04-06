function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let hoursWork = Number(input[3]);
    let nylonUsed = nylon + 2;
    let nylonPrice = nylonUsed * 1.5;
    let paintUsed = paint + paint * 0.10;
    let paintPrice = paintUsed * 14.50;
    let thinnerPrice = paintThinner * 5;
    let allSumMaterials = nylonPrice + paintPrice + thinnerPrice + 0.40;
    let hoursWorkPrice = (allSumMaterials * 0.30) * hoursWork
    let finalPrice = allSumMaterials + hoursWorkPrice;
    console.log(finalPrice);
}
repainting(["10", "11", "4", "8"])