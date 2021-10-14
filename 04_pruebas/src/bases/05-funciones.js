function saludar(nombre){
    return `Hola,${nombre}`;
}

saludar = 30;


console.log(saludar(lis));

const saludar1 = function(nombre){
    return `Hola,${nombre}`;
}


const saludar2 = (nombre)=>{
    return `Hola,${nombre}`;
}
console.log(saludar2('lis'));

const saludar3 = (nombre)=>`Hola,${nombre}`;
const saludar4 = (nombre)=>`Hola mundo`;

const getUser =()=>{
    return {
        id: 'ABCD',
        username:'li_za'
    }
}

console.log(getUser());

const getUser2 =()=>({
        id: 'ABCD',
        username:'li_za'
    
});
function getUsuarioActivo(nombre){
    return{
        id: 'ABCD',
        username:'li_za'
    }

}
const usuarioActivo = getUsuarioActivo('lis');
console.log(usuarioActivo);

const  getUsuarioActivo = (nombre)=>({
        id: 'ABCD',
        username:'li_za'
});
const usuarioActivo = getUsuarioActivo('lis');
console.log(usuarioActivo);