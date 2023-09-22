

class Single{ // No se tiene que llamar asi

    static instancia;
    nombre = ''

    constructor(nombre = ''){
        

        if(!!Single.instancia){
            return Single.instancia
        }
        

        Single.instancia = this;
        this.nombre = nombre;

        // return this;

    }
}


const instancia1 = new Single('Mariana')
const instancia2 = new Single('Sebastian')
const instancia3 = new Single('Camilo')


console.log(`Nombre de la instancia1 es: ${instancia1.nombre} `)
console.log(`Nombre de la instancia2 es: ${instancia2.nombre} `)
console.log(`Nombre de la instancia3 es: ${instancia3.nombre} `)
