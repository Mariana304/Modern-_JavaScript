// alert('hola');

let nombre =  prompt('¿cual es tu nombre?')

console.log(nombre);
document.write(' hola ' + nombre + ' como estas?' )


//confirm('¿estas seguro de borrar esto?') esto no muestra nada, para mostrar algo debe ser guardado en una variable, y este devolvera datos de tipo booleano osea true si acepta o false si cancela 


let seleccion = confirm('¿estas seguro de borrar esto?') ;

console.log({seleccion});