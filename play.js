let name = 'Mateo'; // en lugar de var usamos let, porque evita errores
let age = 21;
const hasHobbies = true; // sirve para constantes, y para declarar datos que no pensamos cambiar
//console.log(name);

//const summarizeUser =

// creating a function
function summarizeUser(userName, userAge, userHasHobby) {
    return ('Name is ' + userName +
        ', age is ' + userAge +
        ', user has hobbies: ' + userHasHobby );
}

// otra forma de declarar una funcion (arrow function)
const add = (a,b) => {
    return a + b;
}

// tambien se puede omitir las llaves y el return, pudiendo hacer esto
const sub = (a,b) => a-b;

// also you can have a function with one parameter, and that, let you omit the parentheses
const increment = a => a+1;

//

// executing functions
console.log(add(2,2));
console.log(sub(2,1));
console.log(summarizeUser(name, age, hasHobbies));