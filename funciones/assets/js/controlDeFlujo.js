// /* 
// Control de flujo

// Cuando hablamos de control de flujo, hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas istruucciones las que determinan o controlan dicho flujo.

// En un programa, a menos de que el control de flujo se vea modificado por una instruccion de control (por ejemplo una condicional), el control de flujo se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha)
// */

// //Condicionales:  nos permiten evaluar si una condicion cumple o no con lo que estamos evaluando. Su sintaxis es muy sensilla, tanto que podemos agregar condiciones intermedias en el caso de que no se cumpla la primera evaluacion y se deba evaluar mas.

// //if (si)
// /*Sintaxis de un if:

// if (condicion) {
//     //instrucciones
// }*/

// //Felipe quiere ir a una fiesta, pero es menor de edad y en esa fiesta daran alcohol. Ayuda a Felipe a decidir si puede o no ir a la fiesta.

// const edadFelipe = 19;

// if (edadFelipe < 18) {
//   console.log("sorry mi ciela, no puedes entrar");
// } //muestra en la consola porque se cumplio

// //Sentencia else (si no o de otro modo)

// if (edadFelipe < 18) {
//   console.log("sorry mi ciela, no puedes entrar"); //si la sentencia es verdadera se ejecuta esto
// } else {
//   console.log("vamo a la fiesta");
// } //si la sentencia es falsa, se ejecuta esta

// /*prompt: nos sirve para solicitar datos al usuario y almacenarlos en una variable

// var hora=prompt("Ingrese la hora actual (SOLO LA HORA)");
// if (hora<12){
//     console.log("Buenos días ");
// }else{
//     console.log("Buenas tardes");
// }

// Valores que se evaluan como valores falsos:

// -false, 0, "" (cadena vacia), null, undefined, NaN (Not a Number)*/

// /*else if (de otro modo si): nos ayuda a ejecutar una nueva condicion en caso de que la primera sea falsa, Podemos usar todas las estructuras else if que sean necesarias, terminando con una estructura else.
//  */

// // var hora = prompt("Ingresa solo la hora actual en formato 24 horas");
// // /*if (hora<12){
// //     console.log("Es temprano, desayuna algo");
// // } else if (hora <16){
// //     console.log("Ya es tarde, hora de comer");
// // } else {
// //     console.log("Ya es noche, cena y a mimir");
// // }*/

// // if (hora < 12) {
// //   console.log("Buenos dias, desayuna algo rico.");
// // } else if (hora >= 12 && hora <= 18) {
// //   console.log("Buenas tardes, hora de comer.");
// // } else if (hora > 18 && hora <= 24) {
// //   console.log("Buenas noches, cenar y a dormir.");
// // } else {
// //   console.log("Ingresa una hora valida");
// // }


// // nombreIngresado =prompt(("ingrese su nombre"));

// // nombreIngresado = nombreIngresado.ToUpperCase()

// // if (nombreIngresado === "FELIPE"){
// //   console.log("hola Felipe");
// // } else if (nombreIngresado === "JUAN CARLOS") {
// //   console.log("hola Juan Carlos");
// // } else{
// //   console.log("Hola desconocido")
// // }


// //Validacion para un nombre de usuario de mi PIb usando else if

// // nombreIngresado =(prompt("Ingrese su nombre"));

// // nombreIngresado = nombreIngresado.toUpperCase()

// // if (nombreIngresado === "FELIPE") {
// //     console.log("Hola Felipe");
// // } else if (nombreIngresado === "JUAN CARLOS") {
// //     console.log("Hola Juan Carlos");
// // } else{
// //     console.log("Hola desconocido");
// // }


// var cantidadDeReprobados;
// var ccantidadDeReprobados = 2;

// if (cantidadDeReprobados <30){
//     cantidadDeReprobados = "felipe tuvo pocos reprobados";
// }
// else{ 
//   cantidadDeReprobados = "fELIPE TUVO MUCHOS REPROBADOS;"
// }
// console.log (cantidadDeReprobados);

// var reprobados = cantidadDeReprobados <30 ? "felipe tuvo pocs reprobados": "felipe tuvo muchos reprobados";



// var ejercicio;
// var ejercicio =12;

// if (ejercicio > 20) {
//   ejercicio = "si es arriba de eso";
// }
// else {
//   ejercicio = "no es arriba vato !!!!!!! eeeeeu";
// }
// console.log (ejercicio);

// var pedo = ejercicio  <22 ? "si es 1 vato perro meco" : "no es vato aplicate";

// console.log(pedo);


opcion = prompt("Ingresa una opcion del 1 al 4");

switch (opcion){
  case "1":
    console.log("seleccionaste la opcion 1");
    break;
  case "2":
    console.log("seleccionaste la opcion 2");
    break;
  case "3":
    console.log("seleccionaste la opcion 3");
    break;
  case "4":
    console.log("seleccionaste la opcion 4");
    break;
    default:
      console.log("Me quieres engañar, no estas ingresando la opcion valida");
}

console.log(typeof(opcion))

