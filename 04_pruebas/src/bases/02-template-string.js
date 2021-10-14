const nombre = 'Lisbeth';
const apellido = 'Jimenez';

const nombreCompleto = `${nombre} ${apellido}${1+1}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola mundo'+ nombre;
    
}
console.log(`Este es un texto: ${ getSaludo(nombre)}`);
//ctrl+espace

