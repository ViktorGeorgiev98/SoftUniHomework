function softUniReception(arr) {
    let countedStudents = 0;
    let hours = 0;
    while (countedStudents < Number(arr[3])) {
        hours += 1;
        if (hours % 4 === 0) {
            countedStudents += 0;
        } else {
            countedStudents += Number(arr[0]) + Number(arr[1]) + Number(arr[2]);
        }
    }
    console.log(`Time needed: ${hours}h.`);
}
softUniReception(['5','6','4','20'])
    