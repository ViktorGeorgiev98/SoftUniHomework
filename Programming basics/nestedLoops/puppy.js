function puppy(input) {
    let foodKG = Number(input[0]) * 1000;
    let command = '';
    let foodeveryDay = 0;
    let index = 1;
    let foodEaten = 0;
    while (true) {
        command = input[index];
        if (command === 'Adopted') {
            break;
        } else {
            foodeveryDay = Number(command);
        }
        index++;
        foodEaten += foodeveryDay;

    }
    let diff = Math.abs(foodKG - foodEaten);
    if (foodKG >= foodEaten) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    } else {
        console.log(`Food is not enough. You need ${diff} grams more.`);
    }
}
puppy(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"])
