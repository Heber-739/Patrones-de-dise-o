import { Payment } from "./payment.interface";

export class CreditPAyment implements Payment {
    pay(): string {
        return ' Pay whit credit card'
    }
}