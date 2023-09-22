/**
 * 
 * @param {HTMLDivElement} element 
 */

import{ heroes } from '../data/heroes'

//recibo el elemento html "element"
export const asyncComponent = ( element ) =>{

    const id1 = '5d86371fd55e2e2a30fe1ccb';
    console.log('Inicio de componenetes')



    findHero( id1 )
    .then( ( {name} ) => element.innerHTML = name )
    // .catch( console.error( element.innerHTML = error);)    

}

/**
 * 
 * @param {String} id 
 */

const findHero = async( id ) => {

    const hero = heroes.find( hero => hero.id === id );

    return hero?.name;

}