import { Payment } from "./Payment.interface";

export class CreditCardPayment implements Payment {


    pay(){
        return "Payment with credit card"
    }
}