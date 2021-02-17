import {Punto} from "./punto"
let coordenada1 = new Punto(15,5)
let coordenada2 = new Punto (25,8)
let coordenada3 = new Punto (7,2)
let coordenada4 = new Punto (10, 2);

let coordernadaArr: Punto []= [coordenada2,coordenada3,coordenada4]
//console.log(coordenada1)
//console.log(coordenada1.tostring())
//console.log(coordenada1.getX())
//console.log(coordenada1.getY())
coordenada1.setX(8);
coordenada1.setY(9);
//console.log(coordenada1.tostring())
//console.log(coordenada1.distaciaAlOrigen())
//console.log(coordenada1.calcularDistancia(coordenada2))
console.log(coordenada1.calcularMasCercano(coordernadaArr))
//console.log(coordenada2.calcularCuadrante());
