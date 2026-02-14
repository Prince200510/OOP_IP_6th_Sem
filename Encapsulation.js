class BankAccount {
    #balance;  // private
    #pin;

    constructor(owner, initialbalance, pin) {
        this.owner = owner;  // public property
        this.#balance = initialbalance; 
        this.#pin = String(pin); 
    }

    deposit(amount) {
        if(amount <= 0) {
            console.log("Invaild deposit amount !!!");
            return;
        } else {
            this.#balance += amount;
            return this;
        }
    }

    withdraw(amount, entered_pin) {
        if(entered_pin !== this.#pin) {
            console.log("Incorrect Pin !!!");
            return;
        } 
        
        if(amount > this.#balance) {
            console.log("Insufficient funds !!!");
            return;
        }

        this.#balance -= amount;
        let cash_back_amount = this.cash_back(amount, 4);
        this.#balance += cash_back_amount;  
        return this;
    }

    get balance() {
        return this.#balance;
    }

    set pin(new_pin) {
        if(new_pin.length !== 4) {
            console.log("Pin must be 4 digits !!!");
            return;
        }

        this.#pin = new_pin;
    }

    interest(rate) {
        if(rate <= 0) {
            console.log("Invaild Interest rate value or a it is in negative");
            return;
        }

        this.#balance += this.#balance * (rate / 100);
        return this;
    }

    cash_back(amount, percentage) {
        if(amount <= 0 || percentage <= 0) {
            console.log("Invalid amount or percentage value !!!");
            return 0; 
        }
        let cash_back_amount = amount * (percentage / 100);  
        console.log("Cash back amount :" +cash_back_amount);
        return cash_back_amount;
    }
}

let a = new BankAccount("Prince Maurya", 10000, "1234");
console.log("Balance  :" + a.balance);
a.deposit(500)
console.log("Deposit  :" + a.balance);
a.withdraw(1000, "1234");
console.log("Withdraw :" + a.balance);
a.interest(5);
console.log("Interest :" + a.balance);

// class Account {
//     constructor(account_holder, balance) {
//         this.account_holder = account_holder;
//         this.balance = balance;
//     }

//     deposit(amount) {
//         if(amount <= 0) {
            
//         }
//     }
// }