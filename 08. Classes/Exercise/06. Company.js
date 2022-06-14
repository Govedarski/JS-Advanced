class Company {
    departments = {};

    addEmployee(name, salary, position, department) {
        if (salary < 0
            || arguments.length < 4
            || Array.from(arguments).some(x => x==='' || x=== undefined || x===null)) {
            throw Error('Invalid input!');
        }

        const worker = {name, salary, position};

        if (!this.departments[department]) {
            this.departments[department] = {averageSalary: 0, workers: []};
        }

        const averageSalary = this.departments[department].averageSalary;
        const workersNumber = this.departments[department].workers.length;
        const totalSalary = averageSalary * workersNumber + salary;
        const newAverageSalary = totalSalary / (workersNumber + 1);
        this.departments[department].workers.push(worker);
        this.departments[department].averageSalary = newAverageSalary;
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const [bestDepartmentName, bestDepartmentInfo] = Object.entries(this.departments)
            .sort((departA, departB) => departB[1].averageSalary - departA[1].averageSalary)[0];
        let result = `Best Department is: ${bestDepartmentName}\n`;
        result += `Average salary: ${bestDepartmentInfo.averageSalary.toFixed(2)}\n`;
        result += bestDepartmentInfo.workers
            .sort((a, b) => (b.salary - a.salary) || (a.name.localeCompare(b.name)))
            .map(worker => `${worker.name} ${worker.salary} ${worker.position}`)
            .join('\n');
        return result;
    }
}

let c = new Company();
console.log(c.addEmployee('Stanimir', 2000, 'engineer', 'Construction'));
console.log(c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction'));
console.log(c.addEmployee('Slavi', 500, 'dyer', 'Construction'));
console.log(c.addEmployee('Stan', 2000, 'architect', 'Construction'));
console.log(c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing'));
console.log(c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing'));
console.log(c.addEmployee('Gosho', 1350, 'HR', 'Human resources'));
console.log(c.bestDepartment());