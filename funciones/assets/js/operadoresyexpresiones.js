/*

Un operador realiza alguna operacion en una o varios operando (valor de datos) y devuelve un valor. Por ejemplo 1 + 1 = 2

Dentro de los operadores en javascript se encuentran:


*/

// operadores de asignacion ( = )

numero = 10;
numero1= 20;
numero2= 30;

adicion = numero1 + numero2;
sustraccion = numero1 - numero2;
multiplicacion = numero1 * numero2;
division = numero1 / numero2;
modulo = numero1 % numero2;

console.log ("operador de asignacion" );
console.log(adicion);
console.log(sustraccion);
console.log(multiplicacion);
console.log(modulo);


/* Operadores de cadena

Las oporadores de cadena nos permiten concatenar de texto, conocer su longituid, comparar cadenas de texto, buscar una cadena de texto dentro de otra cadena de texto

*/

// sintaxis de lowercase toLoweCase()

let texto1 = "HOLA GENERATION LOWER CASE";
let texto2 = texto1. toLowerCase();
console.log (texto2);

// SINTAXIS uppercase toUpperCase()
//  let texto3 = "hola generation en minisculas"
//  let texto4 = text1. toUpperCase();

//  console.log(texto4);


// Sintaxis de trim()
let texto5 = "    hola geeeneration     "
let texto6 = texto5. trim();


//  sintaxis de concat es concat()

let saludo1 = "hola";
let saludo2 = "Generation";
let union = saludo1.concat(saludo2);
console.log(union);



// operadores logicos ( &&, ||, !)
numero21 = 12;
numero22 = 23;
numero23 = 36;


afirmacion= numero21 < numero22; //false
afirmacion2= numero21 > numero22; //true

console.log("el resultado de las dos afirmaciones: ", afirmacion && afirmacion2);


afirmacion3= numero23 < numero22; //false
afirmacion4= numero22 > numero21; //true

console.log("el resultado de las dos afirmaciones: ", afirmacion && afirmacion2);



// Operador OR (||)

num1 = 12;
num2 = 24;

afir1 = num1 < num2; //true
afir2 = num1 != num2; 

console.log("el resultado de las afirmaciones es ", afir1 || afir2);

// operador NOT (!)

aifrmacion33 = num1 < num2;
afirmacion34 = num1 != num2;

console.log("el resultado del mensaje es: ", !aifrmacion33);


// operadores de comparacion (==, !=, >,<, >=. <=)

let a = 12;
let b = 13;
let c = 13;

console.log("el resultado de la comparacion ay b es: ", a == b);
console.log("el resultado de la comparacion de a y c es: ", a == c);
console.log("el resultado de la comparacion de b y c es: ", b == c);

//Operador igualdad estricta ( === )

/*
Sirve para comparar si dos valores son iguales y de mismo tipo.
*/


num_1 = 12;
num_2 = 24;
num_3 = 25;
num_4 = 92;
num_5 = 91;


op = (num_1 < num_2 || num_2 < num_3) && (!(num_1 != num2) && num_5 != num_3);

console.log("este es el resultado: ", op)

console.log ("operadores aritmeticos +, -, *. /, % ")
function operacionesMatematicas(){
    numero1 = 10;
    numero2 = 2,
    numero3 = "5";

    



// suma
console.log("el resultado de la suma 10 + 2 es: ", numero1 + numero2);

// resta
console.log("el resultado de la resta 10 - 2 es: ", numero1 - numero2);

// multiplicacion
console.log("el resultado de la multiplicacion 10 x 2 es: ", numero1 * numero2);

// division
console.log("el resultado de la division 10 / 2 es: ", numero1 / numero2);

// modulo o residuo
console.log("el resultado de la modulo 10 % 2 es: ", numero1 % numero2);

// exponenciacion
console.log("el resultado de la potencia 10 ^2 es: ", numero1 ** 2);

// incremento decremento
// console.log("el resultado del incremento de 10 ++  es: ", ++ numero1);
console.log("el resultado del decremento de 10 --  es: ", -- numero1);
console.log("ccma")


console.log(numero1++)
console.log("incrementa el 5 el valor 10", numero1 += 5);
console.log("incrementa el 5 el valor 10", numero1 += 5);


console.log ("operador positivo unario de la cadena 2 es ",numero3)
}

operacionesMatematicas();
