function EjercicioOperadores (){
    let a = 5;
    let b = 3;
    let c = -12;

    console.log("a) A > 3, esta afirmación es: ", a > 3);
    console.log("b) A > C, esta afirmación es: ", a > c);
    console.log("c) A < C, esta afirmación es: ", a < c);
    console.log("d) B < C, esta afirmación es: ", b < c);
    console.log("e) B != C, esta afirmación es: ", b != c);
    console.log("f) A == 3, esta afirmación es: ", a == 3);
    console.log("g) A * B == 15, esta afirmación es: ", ( a * b ) == 15);
    console.log("h) A * B == -30, esta afirmacion es: ", ( a * b) == -30);
    console.log("i) C / B < A, esta afirmación es: ", ( c * b ) < a);
    console.log("j) C / B == -10, esta afirmación es: ", ( c / b ) == -10);
    // console.log("k) C / B == -4, esta afirmación es: ", ( c / b ) == -4);

    // Descubri que si se puede poner la operacion entre parentesis y va a funcionar 

    console.log("k) C / B == -4, esta afirmación es: ", (c/b == -4));
    console.log("l) A + B + C == 5, esta afirmacion es: ", ( a + b+ c ) == 5);
    console.log("m) ( A + B == 8 ) && ( A - B == 2 ), esta afirmación es: ", (a + b ==8) && (a-b ==2));
    console.log("n) (A - B == 8) || ( A -B ==6), esta afirmación es: ", (a + b ==8) || (a-b ==6));
    console.log("o) A > 3 && B > 3 && C < 3, esta afirmación es: ", (a > 3 && b > 3 && C < -3));
    console.log("p) A > 3 && B >= 3 && C < 3, afirmación es: ", (a > 3 && b >= 3 && C < -3));
}

EjercicioOperadores();
