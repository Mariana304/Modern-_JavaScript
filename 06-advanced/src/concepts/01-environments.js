/**
 * 
 * @param {HTMLDivElement} element 
 */

//recibo el elemento html "element"
export const enviromentsComponent = ( element ) =>{
   
    console.log( import.meta.env );
    const html = `

    Dev:  ${ import.meta.env.DEV }  <br/>
    Prod: ${ import.meta.env.PROD } <br/>
    KEY: ${ import.meta.env.VITE_API_KEY } <br/>
    URL: ${ import.meta.env.VITE_BASE_URL } <br/>

    
    variables: 
    `
    element.innerHTML = html; // accedemos a el element que viene, y le decimos que su contenido va a ser igual al la variable html que es la que esta arriba

}