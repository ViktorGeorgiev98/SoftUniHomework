function examPrep(input) {
    let badGrades = Number(input.shift());
    let gradesCount = 0;
    let badGradesCount = 0;
    let index = 2;
    let lastProblem = "";
    let gradePassed = true
    let sumGrades = 0;
    // let currentProblem = input[1];
    while (true) {
        let currentProblem = input.shift;
        // if (currentProblem === "Enough") {
        //     lastProblem = currentGrade;
        //     gradePassed = true;
        //     break;
        // }
        let currentGrade = Number(input.shift());
        gradesCount += 1;
        sumGrades += currentGrade;
        if (currentProblem == "Enough") {
            lastProblem = currentGrade;
            gradePassed = true;
            break;
        }
        if (currentGrade <= 4) {
            badGradesCount += 1;
        }
        if (badGradesCount == badGrades) {
            gradePassed = false;
            break;
        }
        // index++;
        // currentProblem = input[index++];
        // currentGrade = Number(input[index]);
        // index++;
    }
    // if (currentProblem === "Enough") {
    //     lastProblem = currentGrade;
    //     gradePassed = true;
    // }
    let averageScore = sumGrades / gradesCount;
    if (gradePassed == true) {
        console.log(`Average score: ${averageScore.toFixed(2)}`)
        console.log(`Number of problems: ${gradesCount}`);
        console.log(`Last problem: ${lastProblem}`);
    } else if (gradePassed == false) {
        console.log(`You need a break, ${badGradesCount} poor grades.`)
    }
}
examPrep(["3",

"Money",

"6",

"Story",

"4",

"Spring",

"Time",

"5",

"Bus",

"6",

"Enough"])