import { IntelProduct } from "./intelProducts";
import { RyzenProduct } from "./ryzenProducts";

export abstract class CreateLaptop {

    abstract IntelLaptop(): IntelProduct;

    abstract RyzenLaptop(): RyzenProduct;

}