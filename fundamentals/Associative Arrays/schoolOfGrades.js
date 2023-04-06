function schoolOfGrades(input) {
    let map = new Map();
    for (let student of input) {
        let currentStudent = student.split(' ');
        let name = currentStudent.shift();
        let totalGrade = 0;
        for (let grade of currentStudent) {
            totalGrade += Number(grade);
        }
        let averageGrade = totalGrade / currentStudent.length;
        if (!map.has(name)) {
            map.set(name, averageGrade);
        } else {
            let currentGrade = map.get(name);
            let newAverageGrade = (currentGrade + averageGrade) / 2;
            map.set(name, newAverageGrade);     
        }
    }

    let sorted = Array.from(map).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [student, grade] of sorted) {
        console.log(`${student}: ${grade.toFixed(2)}`);
    }
}

schoolOfGrades(['Steven 3 5 6 4',

'George 4 6',

'Tammy 2 5 3',

'Steven 6 3']);