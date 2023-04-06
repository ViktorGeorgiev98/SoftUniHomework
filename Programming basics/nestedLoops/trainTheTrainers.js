function train(input) {
    let juryNumber = Number(input[0]);
    let presentation = input[1];
    let index = 2;
    let currentAverageGrade = 0;
    currentSumGrade = 0;
    sumAverageGrade = 0;
    let averageGradeCount = 0;
    while (true) {
        if (presentation === "Finish") {
            break;
        }
        for (let grade = 0; grade < juryNumber; grade++) {
            let currentGrade = Number(input[index++])
            // let currentGrade = Number(input.shift());
            // index++;
            currentSumGrade += currentGrade;
        }
        currentAverageGrade = currentSumGrade / juryNumber;
        console.log(`${presentation} - ${currentAverageGrade.toFixed(2)}.`);
        sumAverageGrade += currentAverageGrade;
        averageGradeCount += 1;
        // index++;
        currentSumGrade = 0;
        presentation = input[index];
        index++;
    }
    let finalGrade = sumAverageGrade / averageGradeCount;
    console.log(`Student's final assessment is ${finalGrade.toFixed(2)}.`);

}
train(["3",

"Arrays",

"4.53",

"5.23",

"5.00",

"Lists",

"5.83",

"6.00",

"5.42",

"Finish"]);