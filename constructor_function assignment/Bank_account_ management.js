function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance || 0;
    this.active = true;
  }


  BankAccount.prototype.deposit = function(amount) {
    this.balance = this.balance + amount;
    console.log(`Deposited ${amount}. current balance in account: ${this.balance}`);
  };


  BankAccount.prototype.withdraw = function(amount) {
    if (this.balance >= amount) {
      this.balance = this.balance - amount ;
      console.log(`Withdrawn ${amount}. current balance in account: ${this.balance}`);
    } else {
      console.log('Insufficient balance');
    }
  };


  BankAccount.prototype.checkBalance = function() {
    console.log(`Account balance: ${this.balance}`);
  };

  BankAccount.prototype.IsActive = function() {
    return this.balance > 0;
  };

let account1 = new BankAccount(2224859, 'junny', 'Savings', 600);

let account2 = new BankAccount(2224832, 'bunny', 'Checking', 1000);


account1.deposit(5000);
account1.withdraw(3000);
account2.deposit(2000);
account2.withdraw(100);
account1.checkBalance();
account2.checkBalance();

console.log(account1.IsActive());

console.log(account2.IsActive());


function getTotalBalance(accounts) {

    let totalBalance = 0;

    for (let account of accounts){

        if (accunt.IsActive()){
            totalBalance += account.balance
        }
    }
    
    return totalBalance
      if (acc.IActive()) {
        return total + acc.balance;
      }
      return total;
    }, 0);
  }
  
  console.log(getTotalBalance(account1, account2));


