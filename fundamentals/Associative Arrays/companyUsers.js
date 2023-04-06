function companyUsers(input) {
    let companyAndID = new Map();
    for (let line of input) {
        let companyAndWorker = line.split(' -> ');
        let company = companyAndWorker[0];
        let worker = companyAndWorker[1];
        if (!companyAndID.has(company)) {
            companyAndID.set(company, worker);
        } else {
            let currentWorkers = companyAndID.get(company);
            if (!currentWorkers.includes(worker)) {
                let newWorkers = currentWorkers + ' ' + worker;
                companyAndID.set(company, newWorkers);
            }
        }
    }

    let sorted = Array.from(companyAndID).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [company, worker] of sorted) {
        console.log(company);
        let workers = worker.split(' ');
        for (let worker of workers) {
            console.log(`-- ${worker}`);
        }
    }
}

companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111' ])