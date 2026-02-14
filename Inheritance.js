class AccountCreation {
    _account_no;
    _ifsc_code;
    _pin;
    _balance;

    constructor(account_no, ifsc_code, pin, balance, location, username, branch_name, account_type, date) {
        this._account_no = account_no;
        this._ifsc_code = ifsc_code;
        this._pin = String(pin);
        this._balance = balance;
        this.location = location;
        this.username = username;
        this.branch_name = branch_name;
        this.account_type = account_type;
        this.date = date;
    }
}

class Saving extends AccountCreation {
    constructor(account_no, ifsc_code, pin, balance, location, username, branch_name, account_type, date) {
        super(account_no, ifsc_code, pin, balance, location, username, branch_name, account_type, date);
    }

    deposit(amount) {
        if(amount <= 0) {
            console.log("Invaild deposit amount !!!");
            return;
        } else {
            this._balance += amount;
            return this;
        }
    }

    withdraw(amount, entered_pin) {
        if(entered_pin !== this._pin) {
            console.log("Incorrect Pin !!!");
            return;
        } 
        
        if(amount > this._balance) {
            console.log("Insufficient funds !!!");
            return;
        }

        this._balance -= amount;
        return this;
    }

    dates(date) {
        if(date > 365) {
            this._balance += this._balance * (7 / 100);
        } else if(date > 150) {
            this._balance += this._balance * (5 / 100);
        } else {
            this._balance += this._balance * (3 / 100);
        }
        return this;
    }
}

class Current extends AccountCreation {
    constructor(account_no, ifsc_code, pin, balance, location, username, branch_name, account_type, date) {
        super(account_no, ifsc_code, pin, balance, location, username, branch_name, account_type, date);
        this.transaction_count = 0;
    }

    deposit(amount) {
        if(amount <= 0) {
            console.log("Invaild deposit amount !!!");
            return;
        } else {
            this._balance += amount;
            this.transaction_count++;
            this.transaction();
            return this;
        }
    }

    withdraw(amount, entered_pin) {
        if(entered_pin !== this._pin) {
            console.log("Incorrect Pin !!!");
            return;
        } 
        
        if(amount > this._balance) {
            console.log("Insufficient funds !!!");
            return;
        }

        this._balance -= amount;
        this.transaction_count++;
        this.transaction();
        return this;
    }

    transaction() {
        if(this.transaction_count % 3 === 0) {
            let fee = this._balance * (1 / 100);
            this._balance -= fee;
            console.log(`Transaction fee: ${fee}. Total transactions: ${this.transaction_count}`);
        }
    }
}

let saving = new Saving("1001", "IFSC001", "1234", 10000, "Mumbai", "Prince Maurya", "Main Branch", "Saving", "180");
console.log("Balance:", saving._balance);
saving.deposit(2000);
console.log("Deposit :", saving._balance);
saving.withdraw(500, "1234");
console.log("Withdraw :", saving._balance);
saving.dates(400);
console.log("Interest :", saving._balance);
console.log("current account");
let current = new Current("1002", "IFSC002", "1234", 15000, "Mumbai", "Prince Jha", "City Branch", "Current", "70");
console.log("Initial Balance:", current._balance);
current.deposit(1000);
console.log("Deposit :", current._balance);
current.withdraw(500, "1234");
console.log("Withdraw :", current._balance);
current.deposit(2000);
console.log("Deposit :", current._balance);
current.deposit(500);
console.log("Deposit :", current._balance);
