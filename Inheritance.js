class AccountCreation {
    #account_no;
    #ifsc_code;
    #pin;
    #balance;

    constructor(account_no, ifsc_code, pin, balance, location, username, branch_name, account_type) {
        this.#account_no = account_no;
        this.#ifsc_code = ifsc_code;
        this.#pin = pin;
        this.#balance = balance;
        this.location = location;
        this.username = username;
        this.branch_name = branch_name;
        this.account_type = account_type;
    }


}