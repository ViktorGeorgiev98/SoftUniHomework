function solve(input) {
    let peopleInQueue = Number(input.shift());
    let wagons = input.toString().split(" ").map((x)=> Number(x));
 
    for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] < 4) {
            if (peopleInQueue >= 4 - wagons[i]) {
                peopleInQueue -= 4 - wagons[i];
                wagons[i] = 4;
            } else {
                wagons[i] += peopleInQueue;
                peopleInQueue = 0;
            }
        }
    }
 
    let isNotFull = false;
 
    for (let i = 0; i < wagons.length; i++) {
        let currenEl = wagons[i];
 
        if (currenEl < 4) {
            isNotFull = true;
        }
    }
 
    if (!isNotFull && peopleInQueue > 0) {
        console.log(`There isn't enough space! ${peopleInQueue} people in a queue!`); 
    }
 
    if (isNotFull && peopleInQueue == 0) {
        console.log("The lift has empty spots!");
    }
 
    console.log(wagons.join(" "));
}