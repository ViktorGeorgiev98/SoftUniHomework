function excursion(input) {
    let numberOfSeaExcursion = Number(input[0]);
    let numberOfMountainExcursion = Number(input[1]);
    let index = 2;
    let allNumberOfExcursions = numberOfMountainExcursion + numberOfSeaExcursion;
    let profit = 0;
    let package = input[index];
    while (true) {
        // let package = input[index];
        if (package === "Stop") {
            break;
        }
        if (package === "sea") {
            if (numberOfSeaExcursion > 0) {
                allNumberOfExcursions -= 1;
                profit += 680;
                numberOfSeaExcursion -= 1;
            }
            
        } else if (package === "mountain") {
            if (numberOfMountainExcursion > 0) {
                allNumberOfExcursions -= 1;
                profit += 499;
                numberOfMountainExcursion -= 1;
            }
            // profit += 499;
        }
        // allNumberOfExcursions -= 1;
        if (allNumberOfExcursions <= 0) {
            break;
        }




        index++;
        package = input[index];
        // index++;

    }
    if (allNumberOfExcursions <= 0) {
        console.log(`Good job! Everything is sold.`);
    }
    console.log(`Profit: ${profit} leva.`)
}
excursion(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])

