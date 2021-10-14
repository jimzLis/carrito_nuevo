//Desestructuración
const persona ={
    nombre : 'Tony',
    edad : 45,
    clave : '1234'

}
//console.log(persona.nombre);
//console.log(persona.edad);
//console.log(persona.clave);
const {nombre,clave} = persona;

const retornaPersona = ({edad,clave,nombre,rango='capitan'}) => {
    //console.log(nombre,rango);
    return{
        nombreClave : clave,
        anios:edad,
        latlng: {
            lat:14.1232,
            lng : -12.3232
        }
    }
}
const {nombreClave,anios,latlng: {lat,lng}} = retornaPersona(persona);
console.log(nombreClave,anios);
console.log(lat,lng);