
import { Fragment, useState, useRef } from 'react';
import BotonOso from './components/botonOso';
import BotonPerro from './components/botonPerro';
import BotonTiburon from './components/botonTiburon';
import BotonTigre from './components/botonTigre';
import BotonTortuga from './components/botonTortuga';
import './App.css'


function App() {


  const [src, setSrc] = useState("");

  const id = useRef(); 

  const insertImg = (url) => {

    setSrc(url)
  
  }

  return (
    <Fragment>
      <BotonOso insertImg = {insertImg} />
      <BotonPerro insertImg = {insertImg}/>
      <BotonTigre insertImg = {insertImg}/>
      <BotonTiburon insertImg = {insertImg}/>
      <BotonTortuga insertImg = {insertImg}/>
      <hr></hr>
      <img  src = {src}></img>

    </Fragment>
  );
}

export default App;
