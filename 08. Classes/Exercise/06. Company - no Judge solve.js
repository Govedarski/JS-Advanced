class Company {
    departments = {};


    addEmployee(name, salary, position, department) {
        if (salary < 0
            || arguments.length < 4
            || Array.from(arguments).some(x => x === '' || x === undefined || x === null)) {
            throw Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = new Department(department);
        }

        this.departments[department].addEmployee(name, salary, position);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const bestDepartment = Object.values(this.departments)
            .sort((a, b) => b.getAverageSalary() - a.getAverageSalary())[0];
        let result = `Best Department is: ${bestDepartment.name}\n`;
        result += bestDepartment.getDepartmentInfo();
        return result;
    }
}


class Department {
    employees = [];

    constructor(name) {
        this.name = name;
    }

    addEmployee(name, salary, position) {
        this.employees.push({name, salary, position});
    }

    getDepartmentInfo() {
        return `Average salary: ${this.getAverageSalary().toFixed(2)}\n` + this.employees
            .sort((a, b) => (b.salary - a.salary) || (a.name.localeCompare(b.name)))
            .map(worker => `${worker.name} ${worker.salary} ${worker.position}`)
            .join('\n');
    }

    getAverageSalary() {
        return this.employees.reduce((acc, employee) => acc + employee.salary, 0) / this.employees.length;
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