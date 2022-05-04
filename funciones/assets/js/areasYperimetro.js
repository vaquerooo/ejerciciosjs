//Ejercicio del menu para dibujar las 4 figuras geométricas, añadiendo opciones para calcular area y perímetro de cada figura.
{
console.log("MENU GEOMÉTRICO.");
let menu = prompt ("Selecciona la figura de la cual quieres conocer su area y perimetro: \n1. Triángulo equilátero\n2. Rectángulo\n3.Círculo\n4. Polígono de 'n' lados.");

    switch(menu){
        case "1":
            let lado = prompt("Ingrese la medida (en metros) de un lado cualquiera del triángulo: ");
            let perimetro = lado * 3;

            console.log("el perimetro es ", perimetro);
            
            break;
        case "2":
            base = prompt("Ingrese la medida (en metros) de la base: ");
            let altura =prompt("Ingrese la medida (en metros) de la altura del rectángulo.");

            let resultado2 = base * altura;

            console.log("El resultado del area de un cuadrado es ", resultado2, "mts");

            break; 
        case "3":
            radio = prompt("Ingrese la medida (en metros) del radio del circulo");
           let resultado3 = Math.PI * radio * radio;
           console.log("El resultado del area del circulo es ", resultado3, "mts");
            break;
        
        case "4": 
            let submenu = prompt ("¿Ingrese cuantos lados tiene? \na) 6 lados. \nb) 7 lados. \nc).8 lados. \n4. 10 lados.");
            
            switch(submenu){

                case "a":
                 let lado1 =  prompt("Cuanto mide el lado#1");
                 let lado2 = prompt("Cuanto mide el lado#2");
                 let lado3 = prompt("Cuanto mide el lado#3");4
                 let lado4 = prompt("Cuanto mide el lado#4");
                 let lado5 = prompt("Cuanto mide el lado#5");
                 let lado6 = prompt("Cuanto mide el lado#6");
                 
                 let resultado6 = lado1+lado2+lado3+lado4+lado5+lado6;

                 console.log("El resultado del perimetro de la figura de 6 lados es: ", resultado6);
                 break;

                 case "b":
                 lado1 = parseFloat(prompt("ingresa el lado");
                 lado2 = prompt("Cuanto mide el lado#2");
                 lado3 = prompt("Cuanto mide el lado#3");
                 lado4 = prompt("Cuanto mide el lado#4");
                 lado5 = prompt("Cuanto mide el lado#5");
                 lado6 = prompt("Cuanto mide el lado#6");
                 lado7 = prompt("Cuanto mide el lado#7");
                 
                 let resultado7 = lado1+lado2+lado3+lado4+lado5+lado6+lado7;
                 
                 console.log("El resultado del perimetro de la figura de 7 lados: ", resultado7);

                 console.log(typeof(lado1));
                 break;
                 
            }
    }
}
parseFloat(prompt('ingresa el lado');
