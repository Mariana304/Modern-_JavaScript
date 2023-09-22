const elMayor = (a,b) => ( a > b )? a : b;


console.log(elMayor(5,7));

const tieneMembresia = ( miembro ) => miembro ? '2 dolares' : '10 dolares'

console.log(tieneMembresia(false));

const amigo = true;

const amigos = [
    'peter',
    'tony',
    'Dr.Strange'
]

const nota = 65;

const grado = (nota >= 95)? 'A+': 
              (nota >= 90)? 'A' :
              (nota >= 85)? 'B+':
              (nota >= 80)? 'B' :
              (nota >= 75)? 'C+':
              (nota >= 70)? 'C' : 'F'

console.log({nota, grado})
