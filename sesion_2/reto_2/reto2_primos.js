/*Crear un ciclo desde 0 hasta 100.
Mostrar todos los números primos en este ciclo con console.log()  */

for(i = 2; i <= 100; i += 1) {
    var primo = true;
    
    for( x = 2; x <= i; x++) {
        if (i % x == 0 && x != i) {
            primo = false
        }
    }

    if(primo) {
        console.log(i);
    }
}


/* for (var contador = 2; contador <= 100; contador++) {
    var primo = true;
    
    for (var i = 2; i <= contador; i++) {
        if (contador % i === 0 && i !== contador) {
        primo = false;
        }
    }
    
    if(primo) {
        console.log(contador);
    }
}
 */