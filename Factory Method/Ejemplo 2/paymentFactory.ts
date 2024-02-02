import { CreditCardPayment } from "./creditCardPayment";
import { GooglePayment } from "./googlePayment";
import { PayEnum } from "./payment.enum";

export class PaymentFactory {
  static create(type: PayEnum) {
    switch (type) {
      case PayEnum.GOOGLE:
        return new GooglePayment();
      case PayEnum.CREDIT_CARD:
        return new CreditCardPayment();
      default:
        return new CreditCardPayment();
    }
  }

  private constructor() {}
}
