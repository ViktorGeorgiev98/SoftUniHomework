function schoolSupplies(input) {
    let pensNumber = Number(input[0]);
    let markersNumber = Number(input[1]);
    let cleanerLiters = Number(input[2]);
    let discountPercetange = Number(input[3]);
    let penPrice = pensNumber * 5.80;
    let markersPrice = markersNumber * 7.20;
    let cleanerPrice = cleanerLiters * 1.20;
    let allMaterialsPrice = penPrice + markersPrice + cleanerPrice;
    let discount = allMaterialsPrice * discountPercetange / 100;
    let finalSum = allMaterialsPrice - discount;
    console.log(finalSum);
}