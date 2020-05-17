class BankAccount {
    constructor(balance, interestRate){
        this.balance = balance;
        this.interestRate = interestRate;
    }
    addInterest(){
        this.balance = this.balance + (this.balance * this.interestRate);
    }
}

class BankAccountWithFee extends BankAccount {
    constructor(balance, interestRate, fee){
        super(balance, interestRate);
        this.fee = fee;
    }
    addInterest(){
        this.balance = this.balance + (this.balance * this.interestRate);
    }
    applyFee(){
        this.balance = this.balance - this.fee;
    }

}

let sethBankAccount = new BankAccount (1200, .02);
let elanaBankAccount = new BankAccountWithFee (5000, .07, 5);
sethBankAccount.addInterest();
elanaBankAccount.addInterest();
elanaBankAccount.applyFee();
console.log(sethBankAccount)
console.log(elanaBankAccount)