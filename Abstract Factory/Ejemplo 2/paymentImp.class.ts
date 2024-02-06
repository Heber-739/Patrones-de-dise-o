import { MasterCard } from "./masterCard.class";
import { Payment } from "./payment.interface";
import { PaymentFactory } from "./paymentFactory.interface";
import { Visa } from "./visa.class";

export type CardType = 'VISA' | 'MASTERCARD';

export class PaymentImp implements PaymentFactory {
     createPayment(typeCard:CardType, serial:string, type:Payment): Payment {
     if(typeCard === 'VISA')   {
        return new Visa(serial,type).type
     } else {
        return new MasterCard(serial,type).type
     }
    }

}