
/*Ejercicio if */

var time =Number(prompt("¿Qué hora es?"));
var saludo; 

 if (time < 12) {
     saludo = "Buenos días";

} if (time < 20) {
     saludo = "Buenas tardes";

} if (time >= 20) {
     saludo = "Buenas noches";
} 

console.log(saludo)

