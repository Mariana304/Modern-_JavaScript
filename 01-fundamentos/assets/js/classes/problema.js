

const fher = {
    nombre : 'Fernando',
    edad : 30,

    imprimir(){
        console.log(`Nombre: ${this.nombre}`)
    }
}

function Persona(nombre, edad){
    console.log('se ejecuto esta linea')
    
    this.nombre = nombre; 
    this.edad = edad; 
}


const maria = new Persona('Maria', 32)
console.log(maria)