

class Persona {

    static   _conteo = 0;

    // propiedades de clase 
    nombre = '';
    codigo = '';
    frase = '';


    constructor(nombre, codigo, frase) {// metodo que se va a ejecutar cuando se insancie el objeto

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }


    //sets y gets
    set setcomidaFavorita(comida) {
        this.comida = comida.toUpperCase();

    }
    get getComidaFavorita() {
        return `la comda favorta de ${this, this.nombre} es ${this.comida}`
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


spiderman.setcomidaFavorita = 'el pastel de cereza'
console.log(spiderman);

console.log(spiderman.getComidaFavorita)