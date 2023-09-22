

let a = 10;
let b = a;

console.log({ a, b })//nos mostrara en b lo que de valor en a

let juan = { nombre:'juan' };// en la variable juan creamos un objeto con el key de "nombre" y con el value de "juan",
let ana = { ...juan };  // nos permite copiar de manera simple una parte o la totalidad de un elemento array o un objeto en JavaScript;
ana.nombre = 'ana';

console.log({ juan, ana })


const cambianombre = ( persona ) =>{// esto no permine cambiar value a nuestra key
    persona.nombre = 'Tony';
    return persona
}

let peter = { nombre: 'peter'};// creamos una variable donde guardaremos el objeto que queremos guardar y lo mandamos como argumento cuando llamemos la funcion
let tony = cambianombre( peter );

console.log({ peter, tony })








