import { Payment } from "./Payment.interface";

export class GooglePayment implements Payment {


    pay(): string{
        return "Payment with google"
    }
}