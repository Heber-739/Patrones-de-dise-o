import { CreateLaptop } from "./abstractCreator";
import { Core_i9, IntelProduct } from "./intelProducts";
import { RyzenProduct, Ryzen_9 } from "./ryzenProducts";

export class NineSeries extends CreateLaptop {
    IntelLaptop(): IntelProduct {
        return new Core_i9();
    }
    RyzenLaptop(): RyzenProduct {
        return new Ryzen_9();
    }
}