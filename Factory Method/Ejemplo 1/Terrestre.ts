import { Paquete } from "./Paquete";
import { Logistica } from "./Logistica";


export class Camion implements Paquete {
    public registro(): string {
        return 'Result of the Container Transport';
    }
}
export class LogisticaTerrestre extends Logistica {

    public enviar(): Paquete {
        return new Camion();
    }
    
}