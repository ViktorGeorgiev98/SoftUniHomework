function yardGreening(input) {
   let squareMeters = Number(input[0]);
   let wholePrice = squareMeters * 7.61;
   let discount = wholePrice * 0.18;
   let finalPrice = wholePrice -  discount;
   console.log(`The final price is: ${finalPrice} lv.`);
   console.log(`The discount is: ${discount} lv.`)
}
