function construction(input) {
    if (input.dizziness === true) {
        let waterToAdd = 0.1 * input.experience * input.weight;
        input.levelOfHydrated += waterToAdd;
        input.dizziness = false;
    }

    return input;
    // console.log(input);
}

construction({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });