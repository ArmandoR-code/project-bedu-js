for(var i = 0; i <= 200; i++) {
    console.log(i + " Hello Word");
}

function logName() {
    var name = 'Benito Camelo';
    console.log(name);
}
logName();

// Funciones
function addition(a, b) {
return a + b 
}

var result = addition(8, 5);
console.log(result)

// expresion de funciones: funcion anónima

var subtraction = function(c, d) {
    return c - d
}

var result = subtraction(4, 2);
console.log(result);

//A veces es necesario que la expresión de la función no sea anónima. Por ejemplo, en una función recursiva donde es necesario hacer referencia a sí misma.

var factorial = function fac(number) {
    return /*condicion*/ number < 1 ? /*si es verdad*/ 1 : /*de otro modo*/ number * fac(number -1)
}

console.log(factorial(5));
