function grades(input) {
    let numberOfStudents = Number(input[0]);
    let students2to3 = 0;
    let students3to4 = 0;
    let students4to5 = 0;
    let students5to = 0;
    let gradesTotal = 0;
    for (let studentGrade = 1; studentGrade <= numberOfStudents; studentGrade++) {
        let currentGrade = Number(input[studentGrade]);
        gradesTotal += currentGrade;
        if (currentGrade >= 2 && currentGrade <3) {
            students2to3 += 1;
        } else if (currentGrade >= 3 && currentGrade < 4) {
            students3to4 += 1;
        } else if (currentGrade >= 4 && currentGrade < 5) {
            students4to5 += 1;
        } else if (currentGrade >= 5) {
            students5to += 1;
        }
    }
    let topStudents = students5to / numberOfStudents * 100;
    let studentsB = students4to5 / numberOfStudents * 100;
    let studentsC = students3to4 / numberOfStudents * 100;
    let failingStudents = students2to3 / numberOfStudents * 100;
    let averageGrade = gradesTotal / numberOfStudents;
    console.log(`Top students: ${topStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${studentsB.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${studentsC.toFixed(2)}%`);
    console.log(`Fail: ${failingStudents.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}
grades([])