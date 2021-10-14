import { collection, getDocs } from "firebase/firestore";
import React,{useEffect} from "react";
import db from "./firebase";

const App = () => {
  useEffect(()=>{
    const obtenerDatos=async()=>{
      const datos= await getDocs(collection(db,'empleados'));
      datos.forEach((documento)=>{
        console.log(documento.data());
      });

    }
    obtenerDatos();
   

  },[])





  return (  
    <div>
      
    </div>
    
  );
}
 
export default App;