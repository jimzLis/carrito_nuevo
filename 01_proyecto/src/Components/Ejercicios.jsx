import React,{useState} from 'react'
import { Fragment } from 'react';
import './Ejercicios.css';

const Ejercicios = () => {


    const[nombreImg,setnNombreImg] = useState('OSO');
    const cambiarImagenPerro=()=>{
            setnNombreImg('https://ichef.bbci.co.uk/news/800/cpsprodpb/15665/production/_107435678_perro1.jpg')
    }
    const cambiarImagenOSO=()=>{
        setnNombreImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXRkarQvvgi6MYPhhI7eXEci75Wt5C6Q8EplGSl0adLm-HbbzjM4c7E-YDvLpfwnFz_EyEp0AM&usqp=CAc%22')
    }

    return (
        <Fragment>
            <div className="container">
                <div>
                <button onClick={cambiarImagenOSO} >OSO</button>
                <button onClick={cambiarImagenPerro} >PERRO</button>
                </div>
                <div>
                    <img src={nombreImg} alt="" />
                </div>
            </div>
        </Fragment>
    )
}

export default Ejercicios;
