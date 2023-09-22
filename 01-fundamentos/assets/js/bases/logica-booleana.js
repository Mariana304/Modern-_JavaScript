const regresaTrue = () => {
    console.log('Regresa a true');
}

const regresaFalse = () => {
    console.log('Regresa a False');
}

console.warn('not o la negacion ')
console.log(true);
console.log(false);

console.log(!regresaFalse())// si le colocapomo un signo de admiracion, este lo forzara a cambiar, si era true, regresa false, y viceversa

console.warn('And')// Esto regresa true si TODOS los valores son verdaderos 

console.log( true && true )// esto devuelve true ya que cumple con las dos condiciones de que son verdaderas
console.log( true && false )// y esto devuelve false
console.log( true && !false ) // esto devuelve true ya que estamos forzando a cambiar a true, por lo que true && true da true

console.log( regresaFalse() && regresaTrue );


console.warn('Or')// si se cumple como minimo una de las condiciones, este regresara true


console.log( true || false )


console.warn('Asignaciones')

const soyUndefine = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'hola mundo'






