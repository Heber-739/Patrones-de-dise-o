import { Paquete } from "./Paquete";

export abstract class Logistica {
    public abstract enviar(): Paquete;

    public crearEnvio(): string {
        const pedido = this.enviar();
        return `Transport By:  ${pedido.registro()}`;
    }
}