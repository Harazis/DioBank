import { DioAccount } from "./DioAccount"


export class PeopleAccount extends DioAccount {
    doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber)
        this.doc_id = doc_id
    }
    deposit = (amount: number): void => {
        if (this.validateStatus()) {
            if (amount <= 0) {
                throw new Error('O valor do depósito deve ser positivo');
            }
            this.balance += amount;
            console.log(`Você depositou R$${amount}. Saldo atual: R$${this.balance}`);
        }
    }
}