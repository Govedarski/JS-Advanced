class Company {
    departments = {};
    departmentClass = class Department {
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
    };


    addEmployee(name, salary, position, department) {
        if (salary < 0
            || arguments.length < 4
            || Array.from(arguments).some(x => x === '' || x === undefined || x === null)) {
            throw Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = new this.departmentClass(department);
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