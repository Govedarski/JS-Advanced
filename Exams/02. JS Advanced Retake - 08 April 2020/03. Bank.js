class Bank {
    #bankName;
    allCustomers = [];

    constructor(bankName) {
        this.bankName = bankName;
    }

    set bankName(value) {
        this.#bankName = value;
    }

    newCustomer(customer) {
        if (this.allCustomers.some(x => x.firstName === customer.firstName && x.lastName === customer.lastName)) {
            throw Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        customer.totalMoney = 0;
        customer.transactions = [];
        this.allCustomers.push(customer);
        return {firstName: customer.firstName, lastName: customer.lastName, personalId: customer.personalId};
    }

    depositMoney(personalId, amount) {
        const customer = this._findCustomerByIdOrThrowError(personalId);
        customer.totalMoney += amount;
        customer.transactions.unshift(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);
        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        const customer = this._findCustomerByIdOrThrowError(personalId);
        if (amount > customer.totalMoney) {
            throw Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }
        customer.totalMoney -= amount;
        customer.transactions.unshift(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);
        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
        const customer = this._findCustomerByIdOrThrowError(personalId);
        let info = `Bank name: ${this.#bankName}\n`;
        info += `Customer name: ${customer.firstName} ${customer.lastName}\n`;
        info += `Customer ID: ${customer.personalId}\n`;
        info += `Total Money: ${customer.totalMoney}$\n`;
        info += 'Transactions:\n';
        info += customer.transactions
            .map((transactionInfo, index) => `${customer.transactions.length - index}. ${transactionInfo}`)
            .join('\n');
        return info;
    }

    _findCustomerByIdOrThrowError(personalId) {
        const customer = this.allCustomers.find(x => x.personalId === personalId);
        if (!customer) {
            throw Error('We have no customer with this ID!');
        }
        return customer;
    }
}


let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
