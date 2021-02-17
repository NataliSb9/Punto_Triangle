import {Punto} from "./punto"
import {Triangulo} from "./triangle"

let coordenada1 = new Punto(8,4)
let coordenada2 = new Punto (9,6)
let coordenada3 = new Punto (7,2)
let coordenada4 = new Punto (10, 2);

let coordernadaArr: Punto []= [coordenada2,coordenada3,coordenada4]
console.log(coordenada1)
console.log(coordenada1.tostring())
console.log(coordenada1.getX())
console.log(coordenada1.getY())
coordenada1.setX(8);
coordenada1.setY(9);
console.log(coordenada1.tostring())
console.log(coordenada1.distaciaAlOrigen())
console.log(coordenada1.calcularDistancia(coordenada2))
console.log(coordenada1.calcularMasCercano(coordernadaArr))
console.log(coordenada2.calcularCuadrante());

//Clase Triangulo:

let triangle = new Triangulo(coordenada1,coordenada2,coordenada3)
console.log(triangle.calcularLongitudLados())