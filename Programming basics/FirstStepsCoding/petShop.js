function petShop(input) {
    let numDogFood = Number(input[0]);
    let numCatFood = Number(input[1]);
    let priceDogFood = numDogFood * 2.50;
    let priceCatFood = numCatFood * 4;
    let allSum = priceDogFood + priceCatFood;
    console.log(`${allSum} lv.`)
}
petShop()