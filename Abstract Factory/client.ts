import { CreateLaptop } from "./abstractCreator";
import { NineSeries } from "./nineSeries";
import { SevenSeries } from "./sevenSeries";

const createNewLaptop = (serie:CreateLaptop) => {
    let intel = serie.IntelLaptop();
    let ryzen = serie.RyzenLaptop();

    console.log(intel.description())
    console.log(ryzen.model())
}

createNewLaptop( new SevenSeries())
createNewLaptop( new NineSeries())

