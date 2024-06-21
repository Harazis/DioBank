import { CompanyAccount } from './Class/CompanyAccount'
import { PeopleAccount } from './Class/PeopleAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Guilherme', 10)
console.log(peopleAccount)
peopleAccount.deposit(10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getLoan(20)

