/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes"

//recibo el elemento html "element"
export const callbacksComponent = ( element ) =>{


    const id1 = '5d86371fd55e2e2a30fe1ccb'
    const id2 = '5d86371fd55e2e2a30fe1ccb2'
    
   findHero( id1, ( error, Heroe1 ) => {

    if( error ){
        element.innerHTML = error;

        return;
    }

    findHero( id2, ( error, Heroe2 ) => {

        if( error ){
            element.innerHTML = error;
    
            return;
        }

         element.innerHTML = `${ Heroe1.name } / ${ Heroe2.name }`;

    })
   });
   }


/**
 * 
 * @param { String } id 
 * @param { ( error?: String; hero:Object ) => void } callback 
 */


const findHero = ( id, callback ) => {

    const hero = heroes.find( hero => hero.id === id ) // llamamos a unuestro arreglo de heroes y buscamos "find" los id de los heroes y le decimos que sea igual al id que viene como arametro (argumento), y lo guardamos en una variable.

    if( !hero ){
        callback(`El heroe con el id: ${ id } no se encuentra`)

        return; // para qyue se salga de la funcion y solo muestre el error, si no se encuentra el id del heroe
    }

    callback( null, hero )

}