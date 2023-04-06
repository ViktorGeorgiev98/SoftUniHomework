function graduation(input) {
    let studentName = input[0];
    // let grade = Number(input[1]);
    let badGradesCount = 0;
    let index = 1;
    let gradeCount = 0;
    let gradeSum = 0;
    while (true) {
        let grade = Number(input[index]);
        gradeCount += 1;
        if (grade < 4.00) {
            badGradesCount += 1;
        }
        if (badGradesCount >= 2) {
            gradeCount -= 1;
            console.log(`${studentName} has been excluded at ${gradeCount} grade`);
            break;
        }
        gradeSum += grade;
        if (gradeCount === 12) {
            // let averageGrade = gradeSum / 12;
            break
            // console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`)
        } 
        index ++;
        grade = Number(input[index]);

    }
    if (badGradesCount < 2) {
        let averageGrade = gradeSum / 12;
        console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    }
}
graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])
