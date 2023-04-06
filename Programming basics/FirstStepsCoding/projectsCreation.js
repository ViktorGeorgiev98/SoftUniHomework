function projectCreation(input) {
    let nameArchitect = input[0];
    let numProjects = Number(input[1]);
    let hoursNeeded = Number(numProjects * 3);
    console.log(`The architect ${nameArchitect} will need ${hoursNeeded} hours to complete ${numProjects} project/s.`)
}
projectCreation("Ivan", "5");