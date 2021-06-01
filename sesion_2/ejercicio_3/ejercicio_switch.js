
/*Ejercicio switch */

var day =Number(prompt("Elige un numero entre el 0 y el 6:"));
var text;

switch (day) {
    case 0:
        text = "Sunday";
        break;
    case 1:
        text = "Monday";
        break;
    case 2:
        text = "Tuesday";
        break;
    case 3:
        text = "Wednesday";
        break;
    case 4:
        text = "Thursday";
        break;
    case 5:
        text = "Friday";
        break;
    case 6:
        text = "Saturday";
        break;
    default:
        text = "Error";   
} 

/*Operador ternario */

var speed = 120;
var message = speed > 100 ? "Vas en chinga!!" : "En el limite";