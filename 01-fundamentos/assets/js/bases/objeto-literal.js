let personaje = {
    nombre : 'Tony',        
    codeName : 'IronMan',
    vivo: false ,        
    edad : 40 ,
    coords: {
        lat: 34.034,
        lng: -118.70

    },
    trajes: ['mark I', 'Mark V', 'HulkBuster'],
    direccion : {
        zip: '10880, 9026',
        ubicacion: 'malibu, claifornia'
    }
};

console.log(personaje.nombre)
console.log('Nombre: ', personaje)
console.log('Edad: ', personaje['edad'])
console.log('lat: ', personaje['coords'].lat) // se puede asi 
console.log('lat: ', personaje['coords']['lat']) // o así
console.log('lat: ', personaje.coords.lat) // o así
console.log('Nro.trajes: ', personaje.trajes.length) // numero de trajes
console.log('Ultimo traje: ', personaje.trajes[personaje.trajes.length - 1] ) // ultimo traje 

const x = 'vivo'
console.log('vivo', personaje[x])// Forma de hacer pregunta 

// Como borral propiedades

delete personaje.edad ;

console.log(personaje);

// asi podemos asisnar una nueva key con un value 

personaje.casado = true;


// como puedo convertirlo en array

const entriesPares = Object.entries(personaje);

console.log(entriesPares)


Object.freeze(personaje);


personaje.dinero = 10000000;
console.log(personaje);

const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );

console.log({propiedades});
console.log({valores});


