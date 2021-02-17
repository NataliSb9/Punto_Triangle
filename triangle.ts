import {Punto} from "./punto"
export class Triangulo{
    private a:Punto;
    private b: Punto;
    private c: Punto;
    constructor(a:Punto,b:Punto, c:Punto){
        this.a = a
        this.b = b
        this.c = c
    }
    public calcularLongitudLados():number[]{
        return [this.a.calcularDistancia(this.b),this.b.calcularDistancia(this.c),this.c.calcularDistancia(this.a)]
    }
}