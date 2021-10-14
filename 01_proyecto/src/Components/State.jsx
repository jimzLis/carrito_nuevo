import React,{Component} from "react";

class State extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name : "Alejandra",
            apellido : "Rodriguez"
         }
    }

    cambiarDatos(){
        if(this.state.name==="Alejandra" && this.state.apellido==="Rodriguez"){
           
            this.setState({name:"Mariá",apellido:"Perez"});
        
        }else{
            
            this.setState({name:"Alejandra",apellido:"Rodriguez"});

        }
        
    }


    render() { 
        return ( 
            <>
            <h2>Mi nombre es{this.state.name}{this.state.apellido}</h2>
            <button onClick={this.cambiarDatos.bind(this)} >Pulsar</button>
            </>
         );
    }
}
 
export default State ;