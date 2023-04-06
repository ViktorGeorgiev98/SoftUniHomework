function addAstra(input) {
    let text = input.join('');
    let pattern = /([\|#])(?<itemName>[A-z-A ]+)\1(?<expirationDate>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]+)\1/g;
    // let food = text.match(pattern);
    let pattern2 = /([\|#])(?<itemName>[A-z-A ]+)\1(?<expirationDate>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]+)\1/;
    let foodCalories = 0;
    if (pattern.test(text)) {
        let currentFood = text.match(pattern);
    for (let food of currentFood) {
        let currentProduct = food;
        let product = pattern2.exec(currentProduct);
        foodCalories += Number(product.groups.calories);
    }
    console.log(`You have food to last you for: ${Math.floor(foodCalories / 2000)} days!`);
    for (let food of currentFood) {
        let currentProduct = food;
        let product = pattern2.exec(currentProduct);
        console.log(`Item: ${product.groups.itemName}, Best before: ${product.groups.expirationDate}, Nutrition: ${product.groups.calories}`);
    }
    } else {
        console.log(`You have food to last you for: ${foodCalories} days!`);
    }


}

addAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]
    );