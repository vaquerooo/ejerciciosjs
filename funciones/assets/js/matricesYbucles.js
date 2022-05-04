
// estructura basica de un array
var arcoiris = new Array ("rojo", "azul", "amarillo", "violeta", "naranja", "rosa");



// segunda forma de crear un arreglo (felipe favs)
var arcoiris = ["rojo", "azul", "amarillo", "violeta", "naranja", "rosa"];

// // ejemplo arreglos

// var listasuper = Array(); //primera forma
// var listasuper = []; //segunda forma

// Var diasSemana = Array("lunes", "martes", "miecoles", "jueves", "viernes", "sabado", "domingo"); //primera forma
// Var diasSemana = ["lunes", "martes", "miecoles", "jueves", "viernes", "sabado", "domingo"] // segunda forma


// console.log(diasSemana[1]);


//array asociativo
/*

Un array asociativo que contiene una serie de datos que se almacena en una
estructura de datos que se llama objeto.
Nos sirve hacerlo de este modo para tener un control más especifico para llamarlo.
Ya que un array normal se llama por su indice (0,1,2,3).
Asosociamos el numero de indice por una cadena de texto.
*/

let miComputadora = {
    marca: "ASUS",
    modelo: "GL555X",
    procesador: "Intel core7",
    ram: "16 GB",
    almacenamiento: "1 TB"
}

console.log(miComputadora.marca);

let participante = {
nombre: "felipe",
edad: "30",
github: "enlace",
repositorios: "entregado"
}

console.log(participante.edad);

/*  
Metodo de los arrays
En los arrays tenemos ciertos metodos que nos permiten manipular los elementos de un array. Estos nos permiten desdea gregar elementos, eliminar elementos hasta reordenarlos.

Podemos dividir en 3 grupos:
Metodos transformadores: Son los que permiten manipular los elementos.

*/

// var arrayEjemplo = ["manzanas", "peras", "zanahorias", "duraznos", "Melones", "sandias", "aguacates" "Naranjas"];

// console.log("Este es mi arreglo original: ", arrayEjemplo);


// metodo transformado
/* 
Metodo push: agregar un elemento al final del arreglo.
*/



// Sintaxis basica de los metodos

// nombreDelArrayAModificar.metodoDeLaClase(parametros);

// arrayEjemplo.push ("uvas");


// arrayEjemplo.pop();
// console.log("elima el ultimo elemento del arreglo" arrayEjemplo);


// metodo hift : agrega uno o mas elementos al principio del arreglo

// arrayEjemplo.shift();


// metodo reverse : reversa los elementos del arreglo

// arrayEjemplo.reverse();

// metodo sort: ordena los elementos del arreglo

// arrayEjemplo.sort();
// console.log("ordena los elementos del arreglo", arrayEjemplo);


// forEach() : recorre el array y devuelve un nuevo array con los elementos que cumplan la condicion.

// var fruta = ["manzana", "pera", "naranja", "sandia"];
// var forEach = fruta.forEach(fruta => console.log("la fruta" + fruta " se encuentran en la posicion")); //imprimimos el arrayEjemplo.

// metodo slice(): extrae una secion de la cadena o arreglo

var cadena1 = "hola soy felipe";
var cadena2 = cadena1.slice(1, -2); // cuenta los caracteres y lo dividies, luego el otro valor de derecha a izquierda cuentas y separas  Hol |a Generati| on
console.log("esta es la cadena1 ", cadena2);

var cadena2 = ["Hola"," ", " Generation", " de", " Javascript"];
console.log(cadena2);
var cadena3 = cadena2.slice(3);
console.log(cadena3);
var cadena4 = cadena3[1].slice(0,-6);
console.log("Prueba1:",cadena4);


// cortar array
// cortar array de numeros
// cortar cadenas de texto.



// Miguel
// Anaya 

// Luis 
// Gaytan

// cupon = mian100
// cupon2 = luga200


/*
* Metodo splice()

Hay un metodo muy especial, que se llama splice, y nos permite modificar el contenido de un array. Podemos usarlo en tres formas:

    - Para eliminar o suprimir elementos del array.
    - Para agregar o insertar nuevos elementos al array.
    - Para reemplazar elementos existentes del array.

?Esta es la sintaxis general del metodo splice
splice(indice de inicio, cantidadDeElementosAEliminar, nuevoElemento1, nuevoElemento2, ..., nuevoElementoN)
*/


//!EJERCICIO EXPRESS!!!!

var todosLosMesesDelAnio = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

//Usando splice quita todos los meses del anio que tengan 30 dias


todosLosMesesDelAnio.splice(2,10);
todosLosMesesDelAnio.splice(0,1);
console.log("error" ,todosLosMesesDelAnio)

// var todosLosMesesDelAnio.splice(mesesCon31);

// new = meses.

// console.log("");
// console.log("-----------------METODO SPLICE-------------------");
// console.log("");

// //Crear un array de ejemplo llamado meses 

// let meses = ["enero", "febrero", "lunes", "martes","marzo"];
// console.log ("Este es mi array original de meses y dias revueltos", meses);

// /*
// *1- Eliminar elementos del array usando splice

// Para suprimir valores del array, debemos especificar dos argumentos: la posicion del primer elemento que deseamos eliminar, y el numero de elementos a eliminar.

// !Sintaxis del splice para eliminar elementos: splice(posicionInicial, cantidadDeElementosAEliminar)

// */
// //enero = 0
// //febrero = 1
// //lunes = 2
// //martes = 3
// //marzo = 4

// meses.splice(2,2); //Elimina los dos elementos de la posicion 2
// console.log("Elimine los dos elementos que no son meses del arreglo", meses);

// meses.splice(1, 1); //Elimina el elemento de la posicion 1
// console.log("Elimine el elemento de la posicion 1", meses);




// agregar nuevos elementos al arreglo sin eliminar ninguno

let meses3 = ["enero", "febrero", "lunes", "martes"];
console.log ("meses", meses3);

meses3.splice(2,0, "abril, mayo");

console.log("agregue nuevos elementos", meses3);


let tacos = ["tacos al pastor", "tacos de bistec", "tacos de lengua", "tacos de tripita"];

console.log ("estos son mis tacos ", tacos);

tacos.splice(4,0, "taco de arrachera", "taco de pollo");

console.log("estos son todos mis tacos ", tacos);

tacos.shift("taco de chuleta");

console.log("otro taquito mas ", tacos);

let carreritas = ["Lucia", "Maria", "Jesus", "Roberto", "Andrea", "José"];

carreritas.pop();
console.log("OMG dieron muerte a JOSE!!!!!", carreritas);

carreritas.splice(1,0,"Cristobal","Fernanda", "Armando")
console.log("Se han unido 3 corredores y ahora quedo asi la tabla ", carreritas);

// carreritas.push ("Federico");
// coonsole.log("Un nuevo Corredor toma la delantera, Terrible", carreritas);



var miPescado = ['ángel', 'payaso', 'mandarín', 'cirujano'];

console.log('miPescado antes: ' + miPescado);
// "miPescado antes: ángel,payaso,mandarín,cirujano"

var eliminado = miPescado.shift();

console.log('miPescado después: ' + miPescado);
// "miPescado after: payaso,mandarín,cirujano"

console.log('Elemento eliminado: ' + eliminado);
// "Elemento eliminado: ángel"