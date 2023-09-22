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

class Heroe extends Persona{

    clan = 'sin clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);

        this.clan = 'Los avergers'
    }

    quienSoy(){
        console.log(`soy ${this.nombre}, ${this.clan} `)
        super.quienSoy();
    }
}



const spiderman = new Heroe('peter parker', 'spiderman', 'soy tu amigable vecino spiderman')
spiderman.quienSoy();
console.log(spiderman)