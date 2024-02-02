import { PaymentFactory } from './paymentFactory';
import { PayEnum } from "./payment.enum"

(()=>{
    const paymentGoogle = PaymentFactory.create(PayEnum.GOOGLE)
    const paymentCard = PaymentFactory.create(PayEnum.CREDIT_CARD)

    console.log({'paymentGoogle':paymentGoogle.pay()});
    console.log({'paymentCard':paymentCard.pay()});

})()