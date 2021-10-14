const personajes = ['Phineas','Candace','Ferb'];
//console.log(personajes[0]);

const [,,p1] = personajes ;

console.log(p1);

const retornaArrleglo = () =>{
    return ['ABC',1234];
}

const [letras,numeros] = retornaArrleglo();
console.log(letras,numeros);

const personajes2 = (valor) => {

    return[valor,()=>{console.log('Hola mundo')}];

}
const [nombre,setNombre] = personajes2('phineas');
console.log(nombre);
setNombre();