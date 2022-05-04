
/*
Funciones

Una funcion es una agrupacion de instrucciones que se ejecutan cuando se llama o se invoca. Las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funciones no se ejecutan sino que se invocan.

*/

// Esta es la estructura basica de una funcion que ya esta siendo llamada o invocada

function nombreFuncion (parametros){


}

// nombreFuncion(); 

/* formas de crear e invocar funciones

1. crear una funcion tradicional, crearla y darle un nombre y parametros.

*/

// funcion tradicional creada y con un nombre asignado



var valor1 = 22;
var valor2 = 33;


function sumaDeDosValores(){
    let valor1 = 5;
    let valor2 = 10;

    let suma = valor1 + valor2;

    console.log ("esta es mi primer funcion: ", suma);
    document.write ("esta es mi primer funcion: ", suma);

}

sumaDeDosValores(); // invocamos a nuestra funciones


function sumaDeTresValores(){
let valor1 = 200;
let valor2 = 13;
let valor3 = 2;
let suma = valor1 + valor2 + valor3;
console.log ("esta es mi segunda funcion perrin: ", suma);
document.write ("esta es mi primer funcion: ", suma);
}

sumaDeTresValores();



function sumaDeTresValores2(valor1, valor2, valor3){
    
    let suma = valor1 + valor2 + valor3;
    console.log ("esta es mi funcion con parametro asignado eh morro: ", suma);
}
    
    sumaDeTresValores2(1,5,10);



// funcion con parametros asignados en la llamada

function areaTriangulo(base, altura){
    let area = base * altura / 2;
    console.log("el area del traingulo es: ", area)
}

areaTriangulo(5,5);
areaTriangulo(10,5);
areaTriangulo(15,5);
areaTriangulo(20,5);
areaTriangulo(25,5);
areaTriangulo(30,5);

/*

Return
la sentencia return finaliza la ejecucion de la funcion y especifica un valor para ser devuelt a quien llama la funcion. o lo que es lo mismo, usamos return para finalizar y tambien para asignar el resultado de una variable.

*/

function areaCuadrado(){
    let lado = 5;
    let areaCuadrado = lado * lado;
    return areaCuadrado;
}

let resultadoQueUsareMasTarde = areaCuadrado(); // guardando el resultado de mi areacuadrado en una variable para usarla despues.

areaCuadrado(); // invocamos la funcion

console.log("Usare mi Resultado que guarde anteriormente para mostrarte el area del cuadrado: ", resultadoQueUsareMasTarde);




function volumenCubo(){
    let volumen = resultadoQueUsareMasTarde * resultadoQueUsareMasTarde * resultadoQueUsareMasTarde;
    console.log("El volumen del cubo es: ", volumen);
}

volumenCubo(); //invocamos nuestra funcion



// // ejercicio area circulo y volumen cilindro
// function AreaDeUnCirculo(){
//     let AreaDeUnCirculo = pi * radio * radio;
//     const pi = 3.1415926535897931;
//     let radio = 10;
//     return AreaDeUnCirculo;
// }
// AreaDeUnCirculo();

// let resultadoVolumen = AreaDeUnCirculo();

// console.log("resultado del area: ", resultadoVolumen);

// function VolumenCilindro(){
//     let VolumenCilindro = resultadoVolumen * h;
//     let h = 10;
//     console.log("Este es mi volumen, por favor jala chi, tqm")
// }

// VolumenCilindro();




// // 111111111111111

// function calcularAreaCirculo() {
//     let radio = 7;
//     return Math.PI * (radio ** 2);
// }

// function volumenCilindro() {
//     let areaCirculo = calcularAreaCirculo();
//     let longitud = 19;
//     return areaCirculo * longitud;
// }

// console.log(volumenCilindro());




/*

FUNCIONES FLECHA

funciones anonimas que no se pueden invocar de otra parte del codigo


*/

// esto es una funcion anonima

let x = function(){
    let numero1 = 5;
    let numero2 = 10;
    let suma = numero1 + numero2;
    console.log("La suma de la funcion anonima es:", suma);
}

x();



/*Si queremos convertirla a una funcion flecha, debemos hacer lo siguiente:

- Eliminamos la palabra function, y nos limitamos a recoger los parametros mediante parentesis tradicionales
- Podemos eliminar las llaves que delimintan el cuerpo de la funcion, abriendolo con una flecha
- Podemos eliminar el return, porque se usa implicitamente
*/

function saludar (nombre){
    let saludo = "hola " + nombre;
    console.log (saludo);
}

// convertir mi saludo a funcion flecha



let saludoflecha = nombre => console.log ("hola " + nombre);

saludoflecha("EL MERO MERO SABOR RANCHERO");

function HackearNASA(nombre){
    let warning = nombre + " Corre perra";
    console.log (warning);
}
HackearNASA ("saul");



function sumaAritmetica(){
    let n1 = 3;
    let n2 = 2;
    let n3 = 2;
    let n4 = 5;
    let suma = n1 + n2 / n3 * n4;
    console.log ("esta es la suma aritmetica QWERT", suma);
}

sumaAritmetica();



