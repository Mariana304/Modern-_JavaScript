


const elMayor = (a,b) => ( a > b )? a : b;// esta es una simpe funcion flecha que recibira 2 numeros como parametros y e


console.log(elMayor(5,7));

const tieneMembresia = ( miembro ) => miembro ? '2 dolares' : '10 dolares'

console.log(tieneMembresia(false));



const nota = 65;

const grado = (nota >= 95)? 'A+': 
              (nota >= 90)? 'A' :
              (nota >= 85)? 'B+':
              (nota >= 80)? 'B' :
              (nota >= 75)? 'C+':
              (nota >= 70)? 'C' : 'F'

console.log({nota, grado})
