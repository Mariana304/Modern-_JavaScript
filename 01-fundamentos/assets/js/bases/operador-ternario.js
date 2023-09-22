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


horaApertura = ( [0,6].includes( dia ) )? ' 9 ' : ' 11 '


// if (horaActual >= horaApertura){
//     mensaje = 'esta abierto'
// }else{
//     mensaje = `esta cerrrado, hoy abrimos a las ${horaApertura}`  ;
// }

mensaje = ( horaActual >= horaApertura )? 'esta abierto': `esta cerrrado, hoy abrimos a las ${horaApertura}`

console.log(horaApertura, mensaje)