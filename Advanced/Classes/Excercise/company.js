class Company {
    constructor() {
        this.departments = {};
        this.averageSalary = 0;
        this._bestDepartment = '';
    }

    addEmployee(name, salary, position, department) {
        if (name === '' 
        || name === null 
        || name === undefined 
        || salary === '' 
        || salary === null 
        || salary === undefined 
        || position === '' 
        || position === null 
        || position === undefined 
        || department === '' 
        || department === null 
        || department === undefined) {
            throw new Error("Invalid input!") 
        }
        if (salary < 0) {
            throw new Error("Invalid input!")
        }

        let currentNewWorker = {
            name: name,
            salary: salary,
            position: position
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
            this.departments[department].push(currentNewWorker);
        } else {
            this.departments[department].push(currentNewWorker);
        }


        return `New employee is hired. Name: ${currentNewWorker.name}. Position: ${currentNewWorker.position}`;
    }

    bestDepartment() {
        for (let dep of Object.entries(this.departments)) {
            let currentAverageSalary = 0;
            for (let worker in dep.value) {
                currentAverageSalary += Number(worker.salary);
            }
            currentAverageSalary /= dep.length;
            if (currentAverageSalary > this.averageSalary) {
                this.averageSalary = currentAverageSalary;
                this._bestDepartment = dep;
            }
        }
        return this._bestDepartment;
    }

}



let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.departments);
console.log(c.bestDepartment())
console.log(c.bestDepartment());
