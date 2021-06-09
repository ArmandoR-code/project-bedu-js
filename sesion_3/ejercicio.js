// Ejercicios funciones
function power(base, exponent){
    let result = 1;
    for(i = 0; i < exponent; i++){
        result *= base
    }
    return result;
}
console.log(power(3, 4))
//1 * 3 *3 *3 *3


function text(){
    let result1 = 0;

    for(x = 0;x <= 10; x++) {
        result1 = x;
        console.log("result1 en el bucle", result1)
    }
    return result1;
}

console.log('result1', text())


function getLargerInt(num1, num2) {
    if(num1 > num2) {
        return num1
    }else {
        return num2
    }
}
console.log(getLargerInt(4, 9))


const getLargerInt2 = function (num1, num2) {
    if(num1 > num2) {
        return num1
    }else {
        return num2
    }
}
console.log(getLargerInt2(8, 2))


// Array
function multiplicationTimesTwo(arrayNumbers) {
    let resultMultipiclation = [];
    for(i = 0; i < arrayNumbers.length; i++) {
        console.log('elemento del array', arrayNumbers[i])
        resultMultipiclation.push(arrayNumbers[i] * 2)
    }
return resultMultipiclation
}
let input = [1, 3, 4, 7, 1, 1, 9, 0]
let output = multiplicationTimesTwo(input);

console.log('output---', output)

// Promedio arreglo
function prom(array) {
    let plus = 0;

    for(i = 0; i < array.length; i++){
        plus += array[i]
    }
    return plus / array.length;
}
 let input2 = [1, 3, 5, 6, 7, 9, 2, 4]
 let output2 = prom(input);

 console.log('output---', output2)

// Objetos
let Isabela = {
    firstName: 'Isabela',
    lastName: 'Palacios',
    age:  17,
}

console.log(Isabela.age)
console.log(Isabela['lastName'])

let cellphone = {
    color: "negro",
    shape: "rectangular",
    internet: true,
    wifi: true,
    ramGB: 32,
    callByCellphone: function() {console.log("Estoy hablando por celular")},
    whatsapp: function() {console.log("Te envio un mensaje de whatsapp")}
}

console.log(cellphone.color)
console.log(cellphone.internet)
console.log(cellphone.ramGB)

cellphone.whatsapp()

// Ejercicio 

let singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];
  function pluck(list, propertyName) {
    let x = [];
    for(i = 0; i < list.length; i++){
        x.push(list[i][propertyName]);
    }
    return x;
  }

  console.log( pluck(singers, 'name') );
  // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
  console.log( pluck(singers, 'band') );
  // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
  console.log( pluck(singers, 'born') );
  // [1948, 1950, 1967, 1964]

  
// Programacion Oriantada a Objetos

let Employer = function(name, birthYear, job) {
    //Constructores
    this.name= name;
    this.birthYear = birthYear;
    this.job = job;
}
let jimmy = new Employer('Jimmy', 1994, 'Developer')
let david = new Employer('David', 1996, 'Doctor')
let anna = new Employer('Anna', 1990, 'Farmer')

console.log('Employ data', jimmy);
console.log('Employ data', david);
console.log('Employ data', anna);


let Person = function(name){
    this.name = name;
}

let Developer = function(name, skills, yearsOfExperience) {
    //Heredar
    Person.call(this, name);
    
    this.skills = skills;
    this.yearsOfExperience = yearsOfExperience;
}

let john = new Developer('John', 'JavaScript', 3)
console.log('This is John', john)



// Ejercicio 
let Vec = function(x, y,) {
     this.x = x;
     this.y = y;
  }
  Vec.prototype.plus = function(z){
      return new Vec(this.x + z.x, this.y + z.y); 
  }
  Vec.prototype.minus= function(n){
      return new Vec(this.x - n.x, this.y - n.y);
  }

  Vec.prototype.length = function(){
      return (Math.sqrt(this.x * this.x + this.y * this.y));
  }

  let vec1 = new Vec(1, 2);
  let vec2 = new Vec(2, 3);
  console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
  console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
  console.log(vec1.length()); // 2.23606797749979