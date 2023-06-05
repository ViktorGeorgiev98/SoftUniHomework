class Company {
    constructor() {
        this.departments = {};
    }

    getDepart(name) {
        const depart = this.departments.find(x => x.name === name);
        if (!depart) {
            const temp = {name, employees: [], salaries: [], positions: []};
            this.departments.push(temp);
            return temp;
        }

        return depart;
    }

    getSalariesSum(depart) {
        return depart.reduce((a, v) => a + v, 0);
    }

    bestSalaryDepart() {
        this.departments.sort((a, b) => 
        this.getSalariesSum(b) / b.salaries.length -
        this.getSalariesSum(a) / a.salaries.length);
    }

    addEmployee(...args) {
        const [name, salary, position, departmentName] = args;
       const isInvalidInput = args.some(x => x === undefined || x === null || x === '') || args[1] < 0;
       
       if (isInvalidInput) {
            throw new Error('Invalid input!');
       }

       const department = this.getDepart(departmentName);
       department.employees.push(name);
       department.salaries.push(salary);
       department.positions.push(position);
       return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const best = this.bestSalaryDepart();

        const combinedEmployees = best.employees.reduce((a, v, i) => {
            a[i] = [];
            a[i].push(v, best.salaries[i], best.positions[i]);
        }, []);
        const sorted = combinedEmployees.sort((a, b) => {
            return b[1] = a[1] === 0 ? a[0].localeCompare(b[0]) : b[1] - a[1];
        });
        const printData = sorted.map(x => x.join(" ")).join("\n");

        return `Best department is: ${best.name}
        Average salary: ${(this.getSalariesSum(best) / best.salaries.length).toFixed(2)}
        ${printData}`;
    }
}