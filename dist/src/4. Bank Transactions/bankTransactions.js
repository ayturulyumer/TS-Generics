"use strict";
class CreateAccount {
    constructor(bankName, bankID) {
        this.bankName = bankName;
        this.bankID = bankID;
    }
}
class PersonalAccount extends CreateAccount {
    constructor(bankName, bankID, ownerName) {
        super(bankName, bankID);
        this.money = 0;
        this.recentTransactions = {};
        this.ownerName = ownerName;
    }
    deposit(amount) {
        this.money += amount;
    }
    expense(amount, expenseType) {
        // Not enough money
        if (this.money < amount) {
            throw new Error(`You can't make ${expenseType} transaction `);
        }
        // if expense type doesn't exist in the obj
        if (!this.recentTransactions.hasOwnProperty(expenseType)) {
            this.recentTransactions[expenseType] = amount;
            // if it does exist
        }
        else {
            this.recentTransactions[expenseType] += amount;
        }
        this.money -= amount;
    }
    showDetails() {
        let totalSpent = 0;
        for (const spent of Object.values(this.recentTransactions)) {
            totalSpent += spent;
        }
        let message = `Bank name: ${this.bankName}\n 
    Bank ID: ${this.bankID}\n 
    Owner name: ${this.ownerName}\n 
    Money: ${this.money}\n 
    Money spent: ${totalSpent}`;
        return message;
    }
}
let account = new PersonalAccount("DSK", 101240, "Ivan Ivanov");
account.deposit(1000);
account.deposit(1000);
account.expense(700, "Buy new phone");
account.expense(400, "Book a vacation");
account.expense(400, "Book a vacation");
account.expense(100, "Buy food");
console.log(account.showDetails());
console.log(`------------------------`);
let account2 = new PersonalAccount("Fibank", 100000, "Petar Petrol");
account2.deposit(10000);
account2.deposit(7000);
account2.expense(1200, "Buy a new car");
account2.expense(200, "Go to a fancy restaurant");
account2.expense(100, "Go to a bar");
account2.expense(30, "Go to the movies");
console.log(account2.showDetails());
//# sourceMappingURL=bankTransactions.js.map