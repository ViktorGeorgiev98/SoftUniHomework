function hospital(input) {
    let period = Number(input[0]);
    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;
    let everyThirdDay = 0;
    for (let day = 1; day <= period; day++) {
        // let patientNumber = Number(input[day]);
        everyThirdDay += 1;
        if (day % 3 === 0) {
            if (untreatedPatients > treatedPatients) {
                doctors += 1;
                everyThirdDay = 0;
            }
        }
        let patientNumber = Number(input[day]);
        if (patientNumber <= doctors) {
            treatedPatients += patientNumber;
        } else if (patientNumber > doctors) {
            treatedPatients += doctors;
        }
        if (patientNumber > doctors) {
            untreatedPatients += patientNumber - doctors;
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}
hospital(["3", "7", "7", "7"])