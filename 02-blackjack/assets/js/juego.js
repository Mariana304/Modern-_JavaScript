/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];// mi baraja
const tipos = ['C', 'D', 'H', 'S'];// tipos de carta, osea diamante, picas, corazon
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML "DOM"
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

// Esta función crea un nuevo deck
const crearDeck = () => {

    for (let i = 2; i <= 10; i++) {// Vamos a recorrer  la variable tipos 10 veces por cata tipo de cartas
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }// y creamos otro ciclo para recorrer las cartas especiales, con su tipo, osea que recorre por cada carta tipo recorre la cantodad de cada especial



    // console.log( deck );
    deck = _.shuffle(deck);// esto me revueve las caratas
    console.log(deck);
    return deck;// retornamos las todas las cartas ya revueltas
}

crearDeck();// llamamos a la funcion


// Esta función me permite tomar una carta
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';// en caso que no funcione crear el deck
    }
    const carta = deck.pop(); // el .pop me quita la ultima carta de mi baraja
    return carta;// y retorna la carta
}

// pedirCarta();
const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);// creamos una variable y extraemos su valor  

    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;// para convertirlo a numero 
}

// turno de la computadora
const turnoComputadora = (puntosMinimos) => {

    do {
        const carta = pedirCarta();// obtenemos la carta de la computadora

        puntosComputadora = puntosComputadora + valorCarta(carta);// añadimos a la variable puntosComputadora el valor de la carta 
        puntosHTML[1].innerText = puntosComputadora;// accedemos al primer indice de los puntos que mustra en el html

        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');// hacemos referencia al documento y le creamos un elemento 'img', que seia la imagen de la carta
        imgCarta.src = `assets/cartas/${carta}.png`; //agregamos el atributo src para que busque la carta y nos la traiga
        imgCarta.classList.add('carta');//le añadimos la classe que contiene el estilo de lacta
        divCartasComputadora.append(imgCarta);//y añadimos en un divla imagen de la crata

        if (puntosMinimos > 21) {
            break;// este ciclo se va a ejecutar mientras que los puntos sean menor que 21, si se pasa, detiene el ciclo
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}



// eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();// esto nos devolvera una carta

    puntosJugador = puntosJugador + valorCarta(carta);// llamamos a la funcion valor carta y se la sumamos a los puntos del jugador
    puntosHTML[0].innerText = puntosJugador;//Hacemos referencia al primer p del html

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');// creamos la etiqueta img
    imgCarta.src = `assets/cartas/${carta}.png`; //añadimos el atributo src para que la busque 
    imgCarta.classList.add('carta');//añadimos la clase que contiene el estilo de la carta
    divCartasJugador.append(imgCarta);// y la ubiacamos en el div que contiene las cartas

    if (puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;// desabilitamos el boton de pedir cuando puntos jugador sea mayor que 21
        btnDetener.disabled = true;// y tambien el de detener
        turnoComputadora(puntosJugador);

    } else if (puntosJugador === 21) {
        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;// cuando haga click en el boton detener, deshabilitamos los botones de pedir y detener y llamamos al turno de la computadora 

    turnoComputadora(puntosJugador);// entonces automaticamente la computadora juga
});

btnNuevo.addEventListener('click', () => {

    console.clear();// limpiamos la consola
    deck = [];//vaciamos la baraja 
    deck = crearDeck();// y creamos una nueva baraja llamando la funcion crear deck


    //los puntos vuelven a estar en 0 al igual que el texto
    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;


    //tambien dejamos vacio el contenedor de cartas

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    //y habilitamos nuevamente los botones necesarios para jugar
    btnPedir.disabled = false;
    btnDetener.disabled = false;

});
