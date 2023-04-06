function formatGrade(grade) {
    let gradeText = '';
    if (grade < 3) {
        gradeText = 'Fail';
    } else if (grade >= 3 && grade < 3.50) {
        gradeText = 'Poor';
    } else if (grade >= 3.50 && grade < 4.50) {
        gradeText = 'Good';
    } else if (grade >= 4.50 && grade < 5.50) {
        gradeText = 'Very good';
    } else if (grade >= 5.50) {
        gradeText = 'Excellent';
    }
    if (grade < 3) {
        console.log(`${gradeText} (2)`);
    } else {
        console.log(`${gradeText} (${grade.toFixed(2)})`);
    }
} 
formatGrade(4.50);