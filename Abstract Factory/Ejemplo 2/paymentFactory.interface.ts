import { Payment } from "./payment.interface";
import { CardType } from "./paymentImp.class";

export interface PaymentFactory {
    createPayment(TYPE:CardType, serial:string, type:Payment): Payment;
}