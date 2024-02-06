import { DebitPAyment } from './debitPay.class';
import { PaymentImp } from './paymentImp.class';
(()=>{


    let newPAy = new PaymentImp()
    let registry = newPAy.createPayment('VISA','4545 2312 2343',new DebitPAyment())
    console.log(registry.pay())
    
})()

