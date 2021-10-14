
import { Fragment, useRef, useState } from 'react';
import './App.css';
import { Multiplicaciones } from './components/multiplicaciones';

function App() {

    const [listResult, setListResult] = useState([]);

    const [multiplicador, setMultiplicador] = useState(1);
    let number = useRef() 
    
  
    const btnCrear = () => {
      const mul = number.current.value;
      const numbers = [1,2,3,4,5,6,7,8,9,10];
      setListResult((preListResult) => {
        
          return numbers.map((number) => number * mul);
      })

      setMultiplicador(mul);
    }



  return (
    <Fragment>
      <label id="nombre">Ingresa un número</label>
      <input id="entrada" ref= {number} type="number"/>
      <button onClick = {btnCrear}>Ok</button>
      <Multiplicaciones listResult = {listResult} multiplicador = {multiplicador}/>

    </Fragment>
  );
}

export default App;
