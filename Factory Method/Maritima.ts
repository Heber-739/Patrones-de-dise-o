import { Paquete } from "./Paquete";
import { Logistica } from "./Logistica";


export class Barco implements Paquete {
    public registro(): string {
        return 'Result of the Trailer Transport';
    }
}

export class LogisticaMaritima extends Logistica {
    public enviar(): Paquete {
        return new Barco();
    }
}