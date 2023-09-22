

// function crearPersona( nombre, apellido ){
//     return{nombre,apellido}
// }

const crearPersonaFlecha = ( nombre, apellido ) => {
    return {nombre, apellido}
};


const persona = crearPersonaFlecha(' fernando ', ' alvarez ');

console.log(persona);

// Asi se imprime todos los argumento en una funcion tradicional

function imprimeArgumentos(){
    console.log(arguments)
}

imprimeArgumentos('hola', true, 40)

// ya asi para una funcion flecha


const imprimeArgumentosFlecha = (...argumentos) => {
    console.log(argumentos)
}

imprimeArgumentosFlecha('hola flecha', true, 40)





