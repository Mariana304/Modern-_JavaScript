//permite repetir una instrucción o una instrucción compuesta un número especificado de veces.


const heroes = [
    'batman',
    'superman',
    'mujer maravilla',
    'aquaman'
];

console.warn('For tradicional')


for ( let i = 0 ; i < heroes.length ; i++ ){
    console.log( heroes[i] )
}



//for in muestra el indice y la propiedad en sí, y la sentencia for of muestra los valores de una colección.
console.warn('For in')
for ( let i in heroes ){
    console.log( heroes[i] )
}

console.warn('For of')
for( let heroe of heroes ){
    console.log( heroe )
}