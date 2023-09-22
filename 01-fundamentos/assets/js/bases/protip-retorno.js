

// function crearPersona( nombre, apellido ){
//     return{nombre,apellido}
// }

const crearPersonaFlecha = ( nombre, apellido ) => {
    return {nombre, apellido}
};


const persona = crearPersonaFlecha(' fernando ', ' alvarez ');//se crea una variable que sera igualada a la funcion flecha que hicimos anteriormente y se le pasaran como argumento o parametro el nombre y el apellido


console.log(persona);// esto retornara un objeto con un key que seria el nombre y el apellido, y un value que seria lo que pasamos como argumento en la constante persona



//Asi se imprime todos los argumento en una funcion tradicional

function imprimeArgumentos(){// esta es una funcion tradicional
    console.log(arguments)// esto mustra los argumentos que fueron enviados, cuando fue llamada la funcion
}
imprimeArgumentos('hola', true, 40)



const imprimeArgumentosFlecha = (...argumentos) => {// y asi para una funcion flecha
    console.log(argumentos)
}

imprimeArgumentosFlecha('hola flecha', true, 40)





