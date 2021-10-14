 import React,{Component} from 'react';
 
 class  PrimerComponente extends Component {
     constructor(props) {
         super(props);
         this.state = {  }
     }
     render() { 
         return ( 
            <form>
            <label>
              Nombre:
              <input type="text" name="name" />
            </label>
            <label>
              Edad:
              <input type="text" name="name" />
            </label>
           
          </form>
          );
     }
 }
  
 export default PrimerComponente;
