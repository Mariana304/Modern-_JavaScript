let a = 5;

if (a > 10) {   
   console.log('a es mayor que 10')
}else{
    console.log('a es menor a 10 ')
}


console.log('fin del programa')


const hoy = new Date();

const dia = hoy.getDay();


// el triple igual es: solo un igual asigna, dos iguales comparan el contenido, y los tres iguales, comparan el contenido y el tipo de dato, yasea string, numero etc..
if (dia === 0){
    console.log('Domingo')
}else{
    console.log('no es domingo')
}

// sin usar if o switch etc.., solo utlizando  objetos, imprimier el dia de la semana

diahoy = 3;

const diasdelasemana = {
    0: 'Domingo' ,
    1: 'lunes' ,
    2:' martes',
    3: 'miercoles' ,
    4: 'jueves', 
    5: 'viernes' ,
    6: 'sabadao' 
}

console.log(diasdelasemana[diahoy] || 'dia no definido')

