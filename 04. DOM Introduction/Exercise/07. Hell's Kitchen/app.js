function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {

        function createEmployee(data) {
            let [name, salary] = data.split(' ');
            return {name, salary: Number(salary)};
        }

        function averageSalary() {
            let totalSalaries = this.employees.reduce((acc, emp) => acc + emp.salary, 0);
            return totalSalaries / this.employees.length;
        }

        function bestSalary() {
            return this.employees.reduce((max, current) => Math.max(max, current.salary), 0);
        }

        const restaurantsData = JSON.parse(document.querySelector('#inputs textarea').value);
        const restaurants = {};

        for (const data of restaurantsData) {
            let [name, employees] = data.split(' - ');
            if (!restaurants[name]) {
                restaurants[name] = {
                    name,
                    employees: [],
                    averageSalary,
                    bestSalary,
                };
            }
            employees = employees.split(', ').map(createEmployee);
            restaurants[name].employees = restaurants[name].employees.concat(employees);
        }

        const best = Object.values(restaurants).sort((a, b) => b.averageSalary() - a.averageSalary())[0];

        document.querySelector('#bestRestaurant p').textContent =
            `Name: ${best.name} Average Salary: ${best.averageSalary().toFixed(2)} Best Salary: ${best.bestSalary().toFixed(2)}`;

        const workersOutput = document.querySelector('#workers p');
        workersOutput.textContent = '';
        best.employees.sort((a, b) => b.salary - a.salary).forEach(x => workersOutput.textContent += `Name: ${x.name} With Salary: ${x.salary} `);
    }
}