import { Card } from "./card.interface";
import { Payment } from "./payment.interface";

export class Visa implements Card {
    constructor(public serial:string, public type:Payment){}
}