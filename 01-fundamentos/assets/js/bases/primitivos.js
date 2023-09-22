// son datos que no son un objeto y no tienen métodos. Hay 6 tipos de datos primitivos: string, number, bigint, boolean, undefined y symbol.


let nombre = 'Peter Parker';//string

console.log({nombre});


nombre = 'Ben Parker'
console.log({nombre});

console.log(typeof nombre)//dice el tipo de dato que es


let marvel = true;// boolean
console.log(typeof marvel)

let edad = 33;//number
console.log(typeof edad)

let superPoderDeSpiderman

let soyNull = null ;// null
console.log(typeof soyNull)


// Este es simbol, los simbols nunca van a ser iguales, aunque tengan el mismo typeof
let simbol1 = Symbol('a');
let simbol2 = Symbol('a');

console.log(typeof simbol1 == simbol2)







