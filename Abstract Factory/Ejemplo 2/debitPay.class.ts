import { Payment } from "./payment.interface";

export class DebitPAyment implements Payment {
    pay(): string {
        return ' Pay whit debit card'
    }
}