import React,{Component} from "react";

class EstilosLinea extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let age=38;
        const titulo ={
            textAlign:'center',
            color:'green',
            backgroundColor:age>=37 ? 'blue':'orangered'
        };
        return (  
            <>
            <h1 style={titulo}>Titulo</h1>
            
            </>
        );
    }
}
 
export default EstilosLinea;