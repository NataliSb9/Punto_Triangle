export class Punto {
    private x: number;
    private y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    //metodos
    public tostring(): string {
        let x: string = this.x.toString()
        let y: string = this.y.toString()
        let resultado: string = "(" + x + "," + y + ")"
        return resultado
    }
    public distaciaAlOrigen(): number {
        let suma: number = Math.pow(this.x, 2) + Math.pow(this.y, 2)
        let resultado: number = Math.sqrt(suma);
        return resultado
    }

    public calcularDistancia(otroPunto: Punto): number {
        let cuadradoX: number = Math.pow(otroPunto.getX() - this.x, 2)
        let cuadradoY: number = Math.pow(otroPunto.getY() - this.y, 2)
        let suma: number = cuadradoX + cuadradoY;
        let raiCuadrada: number = Math.sqrt(suma);
        return raiCuadrada
    }
    public calcularCuadrante(): number {
        let resultado: number
        if (this.x == 0 && this.y == 0) {
            resultado = 0;
        } else if (this.x >= 0 && this.y >= 0) {
            resultado = 1;
        } else if (this.x < 0 && this.y >= 0) {
            resultado = 2;
        } else if (this.x < 0 && this.y < 0) {
            resultado = 3;
        } else if (this.x >= 0 && this.y < 0) {
            resultado = 4;
        }
        return resultado
    }
    public calcularMasCercano(puntos: Punto[]): Punto {
        let resultado: Punto = puntos[0]
        let distancia: number = this.calcularDistancia(puntos[0])
        for (let i = 1; i < puntos.length; i++) {
            if (this.calcularDistancia(puntos[i]) < distancia) {
                distancia = this.calcularDistancia(puntos[i])
                resultado = puntos[i]
            }
        }
        return resultado
    }
    public getX(): number {
        return this.x;
    }
    public setX(x: number) {
        this.x = x;
    }
    public getY(): number {
        return this.y;
    }
    public setY(y: number) {
        this.y = y;
    }

}