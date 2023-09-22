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
console.log('Nombre: ', personaje['nombre'])
console.log('Edad: ', personaje['edad'])
console.log('lat: ', personaje['coords'].lat) // se puede asi 
console.log('lat: ', personaje['coords']['lat']) // o así
console.log('lat: ', personaje.coords.lat) // o así
console.log('Nro.trajes: ', personaje.trajes.length) // numero de trajes
console.log('Ultimo traje: ', personaje.trajes[personaje.trajes.length - 1] ) // ultimo traje 

const x = 'vivo'// con esto formulamos la pregunta
console.log('vivo', personaje[x])// Forma de hacer pregunta, nos regresa un booleano 



delete personaje.edad;// Como borra propiedades

console.log(personaje);



personaje.casado = true;// asi podemos asisnar una nueva key con un value 




const entriesPares = Object.entries(personaje);// como puedo convertirlo en array

console.log(entriesPares)
console.log(entriesPares[0])// si queremos acceder a algun indice, podemos hacerlo asi, y nos arrojara otro array




Object.freeze(personaje);// con esto congelamos literalmente nuestro objeto, es inpenetrable y si queremos agregar un nuevo valor, no lo permitira

personaje.dinero = 10000000;
console.log(personaje);// ejemplo del freeze

const propiedades = Object.getOwnPropertyNames( personaje );// con este accedemos a sus keys
console.log({propiedades});


const valores = Object.values( personaje );// y con este a su valores
console.log({valores});




