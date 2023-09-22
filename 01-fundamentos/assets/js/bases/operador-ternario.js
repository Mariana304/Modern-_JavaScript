// Dias de semana abrimoa a las 11
// pero los fines de semana a las 9

// Entra a un sitio web, para consultar si esta abierto hoy


const dia = 1;
const horaActual = 11;


let horaApertura;
let mensaje; 

// if (dia === 0 || dia == 6){


// if ([0,6].includes( dia )){
//     console.log('fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('dia semana');
//     horaApertura = 11;
// }


horaApertura = ( [0,6].includes( dia ) )? ' 9 ' : ' 11 '// .includ incluye los dias del 0 al 6 y se pregunta si estan en eso dias, esto devuelve un booleano osea tru o false, y dependiendo de si se incluye o no respondera, las primras commilas despues del signo de interrogacion "?", es lo que pasara si devuelve true, osea si es verdadero, y si no devuelve lo que hay en las otras comillas despues del dos puntos ":"



// ya aca simplemente se g¿hace un consiconal que dependiendo del dia y de la hora dice si si estan abiertos o no
if (horaActual >= horaApertura){
    mensaje = 'esta abierto'
}else{
    mensaje = `esta cerrrado, hoy abrimos a las ${horaApertura}`  ;
}

mensaje = ( horaActual >= horaApertura )? 'esta abierto': `esta cerrrado, hoy abrimos a las ${horaApertura}`

console.log(horaApertura, mensaje)