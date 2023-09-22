let nombres = ['maria', 'alejandro', 'sara', 'vanessa'];// arreglo sencillo

//console.log('largo: ', nombres.length) mide mi array

let primero = nombres[0]// acedemos al primer indice de nuestro array

let ultimo = nombres[ nombres.length -1 ]// ya que nustro array da un largo de 4 le restamos 1 ya que comenzamos a contar desde el indice 0

// console.log( { primero, ultimo} )

nombres.forEach( (elemento,indice , arr) =>{// hizo una iteracion por cada nombre, osea que en consola se mostraran tantas veces como el lenght diga, como primer parametro el recibe el elemento, que seria el nombre, como segudo parametro recibe el indice, que seria la posicion del elemento, y como tercer parametro el reciabe el array completo
    //  console.log({indice, elemento,  arr})
});



let nuevaLongitud = nombres.push('camila');// el push sirve para agregar elementos a mi array

 
nuevaLongitud = nombres.unshift('sussana')// este hace lo mismo que el push, agrega un elemento al array, pero con  el push, lo agrega de ultimo, y con el unshift lo agrega de primero

// console.log({nuevaLongitud, nombres})


let nombreBorrado = nombres.pop()// el .pop se utiliza para borrar, borra el ultimo

// console.log({nombreBorrado, nombres})

let pocisionbBorrar = 1;

let nombresBorrados = nombres.splice( pocisionbBorrar, 1);// borra la posicion que deseas

// console.log({nombresBorrados, nombres })


//encuentra la posicion
let metroidIndex = nombres.indexOf('sara')
// console.log({metroidIndex, nombres})















