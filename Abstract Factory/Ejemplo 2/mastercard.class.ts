import { Card } from "./card.interface";
import { Payment } from "./payment.interface";

export class MasterCard implements Card {
  constructor(public serial:string, public type: Payment) {}
}
