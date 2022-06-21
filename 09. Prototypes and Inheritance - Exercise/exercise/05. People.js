function solution() {
    class Employee {
        salary = 0;
        tasks = [];
        dividend = 0;

        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        work() {
            let currentTasks = this.tasks.shift();
            console.log(currentTasks);
            this.tasks.push(currentTasks);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }

    class Junior extends Employee {
        tasks = [`${this.name} is working on a simple task.`];

        constructor(name, age) {
            super(name, age);
        }
    }

    class Senior extends Employee {
        tasks = [
            `${this.name} is working on a complicated task.`,
            `${this.name} is taking time off work.`,
            `${this.name} is supervising junior workers.`];

        constructor(name, age) {
            super(name, age);
        }
    }

    class Manager extends Employee {
        tasks = [
            `${this.name} scheduled a meeting.`,
            `${this.name} is preparing a quarterly report.`];

        constructor(name, age) {
            super(name, age);
        }
    }

    return {Employee, Junior, Senior, Manager};
}

