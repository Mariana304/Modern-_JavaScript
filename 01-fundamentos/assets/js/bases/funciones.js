

function saludar(nombre){
    console.log('Hola ' + nombre)

    return 1;
}

const returnSludar = saludar('Fernando', 40, true)
console.log(returnSludar)

const saludarFlecha = (nombre) => {
    console.log('Hola' + nombre)
}

saludarFlecha('Flecha')


function sumar( a, b ){
    return a + b;
}

console.log( sumar(1,2) );

const sumarFlecha = (a,b) => {
    return a + b;
}
console.log(sumarFlecha(5,7))


const sumarFlechaCorta = (a,b) => a + b;

console.log(sumarFlechaCorta(77,7))


function getAleatorio(){
    return Math.random();
}


console.log( getAleatorio() )



const getAleatorioFlecha = () => Math.random();

console.log(getAleatorioFlecha())