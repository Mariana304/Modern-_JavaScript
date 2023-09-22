let a = 10;
let b = a;

console.log({ a, b })

let juan = { nombre:'juan' };
let ana = { ...juan };  
ana.nombre = 'ana';

console.log({ juan, ana })


const cambianombre = ( persona ) =>{
    persona.nombre = 'Tony';
    return persona
}

let peter = { nombre: 'peter'};
let tony = cambianombre( peter );

console.log({ peter, tony })








