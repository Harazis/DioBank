import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = (amount: number): void => {
        if (this.validateStatus()) {
            if (amount <= 0) {
                throw new Error('O valor do empréstimo deve ser positivo');
            }
            this.balance += amount;
            console.log(`A empresa pegou empréstimo de R$${amount}. Saldo atual: R$${this.balance}`);
        }
    }

    deposit = (): void => {
        console.log('A empresa depositou')
    }


}
