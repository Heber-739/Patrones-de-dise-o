import { CreateLaptop } from "./abstractCreator";
import { Core_i7, IntelProduct } from "./intelProducts";
import { RyzenProduct, Ryzen_7 } from "./ryzenProducts";

export class SevenSeries extends CreateLaptop {
    IntelLaptop(): IntelProduct {
        return new Core_i7();
    }
    RyzenLaptop(): RyzenProduct {
        return new Ryzen_7();
    }
}