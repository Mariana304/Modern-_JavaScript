

class Persona {

    static   _conteo = 0;//se utiliza para definir propiedades y métodos que pertenecen a toda la clase en lugar de pertenecer a instancias individuales de esa clase

    // propiedades de clase 
    nombre = '';
    codigo = '';
    frase = '';


    constructor(nombre, codigo, frase) {// metodo que se va a ejecutar cuando se instancie el objeto

        this.nombre = nombre;// puntero accesible solo dentro de las funciones miembro no estáticas de un tipo class 
        this.codigo = codigo;
        this.frase = frase;
    }


    //sets y gets
    /**
     * @param {string} comida //Indica un parámetro para un método, función o constructor y el tipo de dato que es
     */
    set setcomidaFavorita(comida) { //Set es también una colección ordenada de elementos, lo que significa que esos elementos serán recuperados en el mismo orden en el que fueron insertados.
        this.comida = comida.toUpperCase();

    }
    get getComidaFavorita() {
        return `la comida favorta de ${this, this.nombre} es ${this.comida}`
    }


    quienSoy() {
        console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`)
    }
}


const spiderman = new Persona('peter parker', 'spiderman', 'soy tu amigable vecino spiderman');
const ironman = new Persona('tony stark', 'iroman', 'soy inevitable ');
console.log(ironman);

spiderman.quienSoy();
spiderman.miFrase();


spiderman.setcomidaFavorita = 'el pastel de cereza'//accedemos al setcomida favoritay le agregamos un valor 
console.log(spiderman);

console.log(spiderman.getComidaFavorita)