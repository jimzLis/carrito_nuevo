//import {getHeroeById} from './bases/08-import';
//resolve exito
//reject decir que la promesa no se cumplio

import { getHeroeById } from "./bases/08-import";

/*

const promesa = new Promise((resolve,reject)=>{

    setTimeout(()=>{

      const p1 = getHeroeById(2);
      resolve(p1);
     // reject('No se pudo encontrar el heroe');

    },2000)

}); 

promesa.then((heroe)=>{
    console.log('heroe',heroe);
}).catch(error => console.warn(error));*/

const getHeroeByIdAsync = (id)=>{
    return   new Promise((resolve,reject)=>{

        setTimeout(()=>{
    
          const p1 = getHeroeById(id);
          if(p1){
            resolve(p1);
          }else{
              reject('No se pudo encontrar el heroe');
          }
         
          
    
        },2000)
    
    }); 
  
}
/*getHeroeByIdAsync(10)
.then(heroe => console.log('Heroe',heroe))
.catch(error => console.warn(error));*/
getHeroeByIdAsync(10)
.then( console.log)
.catch(console.warn);