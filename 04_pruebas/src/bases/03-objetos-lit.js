const persona = {
    nombre : 'Tony',
    apellido:'Stark',
    edad:'45',
    direccion:{
         ciudad :'new york',
         zip : 223454,
         lat :14.1244,
         lng:34.234555
    }

}; 
//console.log({persona : persona});
//console.table(persona);
console.log(persona);

const persona2 = {...persona};
persona.nombre = 'Peter';

console.log(persona);
console.log(persona2);

