//import {heroes} from './data/heroes.js';
//import {heroes,owners} from './data/heroes.js';
import heroes from '../data/heroes.js';
//console.log(heroes);

/*const getHeroeById = (id)=>{
    return heroes.find(heroes => heroes.id === id);
}
console.log(getHeroeById(2));
*/
//metodo find retorna el primer elemento de un arreglo, solo un elemento
export const getHeroeById = (id)=> heroes.find(heroes => heroes.id === id);

//console.log(getHeroeById(2));

//metodo filter crea un nuevo arreglo con caracteristicas existentes
export const getHeroesbyOwner = (owner) => heroes.filter((heroe) => owner === heroe.owner);
//console.log(getHeroesbyOwner('DC'));

//console.log(owners);