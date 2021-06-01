
/*Ejercicio else if */

if (time >= 0 && time < 12) {
    saludo = "Buenos días";
} else if (time >= 12 && time < 20) {
    saludo = "Buenas tardes";
} else if (time >= 20 && time < 24) {
    saludo = "Buenas noches";    
} else {
    saludo = "Hora desconocida";
}