import React,{useState} from 'react'

const Hooks = () => {
    const[color,setColor]= useState('yellow');
    const fondo = {
        width:'100%',
        height:'100px',
        backgroundColor:color
    }
    const cambiarColor=()=>{
        if(color==='yellow')
            setColor('orangered')
        if(color==='orangered')
            setColor('yellow')        
    }
    return (
        <>
            <div style={fondo} className="container">
            <button onClick={cambiarColor}>Cambiar Color</button>
            </div>
        </>
    )
}

export default Hooks
