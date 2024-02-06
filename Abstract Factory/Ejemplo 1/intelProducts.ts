export abstract class IntelProduct {
    abstract description(): string;
}

export class Core_i7 extends IntelProduct {
    public description(): string {
            return 'Intel i7'
    }

} 

export class Core_i9 extends IntelProduct {
    public description(): string {
        return 'Intel i9'
    }

} 