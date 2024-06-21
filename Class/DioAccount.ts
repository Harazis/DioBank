export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
        this.name = name
        console.log('Nome alterado com sucesso!')
    }

    getName = (): string => {
        return this.name
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

    withdraw = (balance: number, amount: number): void => {
        if (this.validateStatus()) {
            if (balance <= amount) {
                throw new Error('Seu saldo é menor do que o requisitado para saque')
            }
            this.balance -= amount;
            console.log(`Você sacou R$${amount}. Saldo atual: R$${this.balance}`);
        }
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error('Conta inválida')
    }
}