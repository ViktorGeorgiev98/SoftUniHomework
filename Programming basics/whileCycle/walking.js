function walking(input) {
    let index = 0;
    let stepsWalked = input[index];
    let stepsCounter = 0;
    let currentSteps = 0;
    while (true) {
        if (stepsWalked !== "Going home") {
            currentSteps = Number(stepsWalked);
        } else {
            currentSteps = 0;
        }
        // let currentSteps = Number(stepsWalked);
        stepsCounter += currentSteps;
        if (stepsCounter > 10000) {
            let diff = Math.abs(stepsCounter - 10000);
            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`);
            break;
        }
        if (stepsWalked === "Going home") {
            index++;
            let stepsBeforeHome = Number(input[index]);
            stepsCounter += stepsBeforeHome;
            if (stepsCounter > 10000) {
                let diff = Math.abs(stepsCounter - 10000);
                console.log(`Goal reached! Good job!`);
                console.log(`${diff} steps over the goal!`);
                break;
            } else if (stepsCounter < 10000) {
                let diff = Math.abs(stepsCounter - 10000);
                console.log(`${diff} more steps to reach goal.`);
                break;
            }
        }
        index++;
        stepsWalked = input[index];
    }
}
walking(["1500", "300", "2500", "3000", "Going home", "200"])