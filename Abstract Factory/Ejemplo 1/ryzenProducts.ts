export abstract class RyzenProduct {
    abstract model(): string;
}

export class Ryzen_7 extends RyzenProduct{
    public model(): string {
        return 'Ryzen 7 product'
    }
}

export class Ryzen_9 extends RyzenProduct{
    public model(): string {
        return 'Ryzen 9 product'
    }
}