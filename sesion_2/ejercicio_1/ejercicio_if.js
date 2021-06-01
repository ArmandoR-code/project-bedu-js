
/*Ejercicio if */

var time =Number(prompt("Escribe la hora:"));
var saludo; 

 if (time < 12) {
     saludo = "Buenos días";

} if (time < 20) {
     saludo = "Buenas tardes";

} if (time >= 20) {
     saludo = "Buenas noches";
} 

console.log(saludo)

