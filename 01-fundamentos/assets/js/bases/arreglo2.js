let nombres = ['maria', 'alejandro', 'sara', 'vanessa'];

console.log('largo: ', nombres.length)

let primero = nombres[0]

let ultimo = nombres[ nombres.length -1 ]

console.log( { primero, ultimo} )

nombres.forEach( (elemento, indice, arr) =>{
    console.log({elemento, indice, arr})
});



let nuevaLongitud = nombres.push('camila');

// este hace lo mismo que el push, agrega un elemento al array, pero con  el push, lo agrega de ultimo, y con el unshift lo agrega de primero 

nuevaLongitud = nombres.unshift('sussana')

console.log({nuevaLongitud, nombres})

// el .pop se utiliza para borrar
let nombreBorrado = nombres.pop()

console.log({nombreBorrado, nombres})

let pocisionbBorrar = 1;

let nombresBorrados = nombres.splice( pocisionbBorrar, 1);

console.log({nombresBorrados, nombres })


//encuentra la posicion
let metroidIndex = nombres.indexOf('sara')
console.log({metroidIndex, nombres})













