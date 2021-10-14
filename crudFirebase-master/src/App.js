import React, { Component } from "react";
import "./App.css";
import firebase from "./firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

class App extends Component {
  state = {
    data: [],
    modalInsertar: false,
    modalEditar: false,
    form:{
      clave: '',
      fotografia: '',
      nombre: '',
      edad:'',
      sexo:'',
      salario: ''
    },
    id: 0
  };
  handleChangeImagen=e=>{
    this.setState({form:{
      ...this.state.form,
      [e.target.name]: URL.createObjectURL(e.target.files[0])
    }})
    console.log(this.state.form);
  }

  peticionGet =() => {
    firebase.child("empleados").on("value", (empleado) => {
      if (empleado.val() !== null) {
        this.setState({ ...this.state.data, data: empleado.val() });
      } else {
        this.setState({ data: [] });
      }
    });
  };

  peticionPost=()=>{
    firebase.child("empleados").push(this.state.form,
      error=>{
        if(error)console.log(error)
      });
      this.setState({modalInsertar: false});
  }

  peticionPut=()=>{
    firebase.child(`empleados/${this.state.id}`).set(
      this.state.form,
      error=>{
        if(error)console.log(error)
      });
      this.setState({modalEditar: false});
  }

  peticionDelete=()=>{
    if(window.confirm(`Estás seguro que deseas eliminar el canal ${this.state.form && this.state.form.nombre}?`))
    {
    firebase.child(`empleados/${this.state.id}`).remove(
      error=>{
        if(error)console.log(error)
      });
    }
  }

  handleChange=e=>{
    this.setState({form:{
      ...this.state.form,
      [e.target.name]: e.target.value
    }})
    console.log(this.state.form);
  }

  seleccionarEmpleado=async(empleado, id, caso)=>{

    await this.setState({form: empleado, id: id});

    (caso==="Editar")?this.setState({modalEditar: true}):
    this.peticionDelete()

  }

  componentDidMount() {
    this.peticionGet();
  }

  render() {
    return (
      <div className="App">
        <br />
        <button className="btn btn-success" onClick={()=>this.setState({modalInsertar: true})}>Insertar</button>
        <br />
        <br />

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Clave</th>
              <th>Fotografia</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Sexo</th>
              <th>Salario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.data).map(i=>{
             // console.log(i);
              return <tr key={i}>
                <td>{this.state.data[i].clave}</td>
                <td><img src={this.state.data[i].fotografia} width="150px" height="150px" ></img></td>
                <td>{this.state.data[i].nombre}</td>
                <td>{this.state.data[i].edad}</td>
                <td>{this.state.data[i].sexo}</td>
                <td>{this.state.data[i].salario}</td>
                <td>
                  <button className="btn btn-primary" onClick={()=>this.seleccionarEmpleado(this.state.data[i], i, 'Editar')}>Editar</button> {"   "}
                  <button className="btn btn-danger" onClick={()=>this.seleccionarEmpleado(this.state.data[i], i, 'Eliminar')}>Eliminar</button>
                </td>

              </tr>
            })}
          </tbody>
        </table>


        <Modal isOpen={this.state.modalInsertar}>
      <ModalHeader>Insertar Registro</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Clave: </label>
          <br />
          <input type="text" className="form-control" name="clave" onChange={this.handleChange}/>
          <br />
          <label>Fotografía: </label>
          <br />
          <input type="text" className="form-control" type="file" name="fotografia" onChange={this.handleChangeImagen} />
          <br />
          <label>Nombre: </label>
          <br />
          <input type="text" className="form-control" name="nombre" onChange={this.handleChange}/>
          <br />
          <label>Edad: </label>
          <br />
          <input type="text" className="form-control" name="edad" onChange={this.handleChange}/>
          <br />
          <label>Sexo: </label>
          <br />
          <input type="text" className="form-control" name="sexo" onChange={this.handleChange}/>
          <br />
          <label>Salario: </label>
          <br />
          <input type="text" className="form-control" name="salario" onChange={this.handleChange}/>
          <br />
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={()=>this.peticionPost()}>Insertar</button>{"   "}
        <button className="btn btn-danger" onClick={()=>this.setState({modalInsertar: false})}>Cancelar</button>
      </ModalFooter>
    </Modal>

    <Modal isOpen={this.state.modalEditar}>
      <ModalHeader>Editar Registro</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Clave: </label>
          <br />
          <input type="text" className="form-control" name="clave" onChange={this.handleChange} value={this.state.form && this.state.form.clave}/>
          <br />
          <label>Fotografia: </label>
          <br />
          <input type="text" className="form-control" name="fotografia" onChange={this.handleChange} value={this.state.form && this.state.form.fotografia}/>
          <br />
          <label>Nombre: </label>
          <br />
          <input type="text" className="form-control" name="nombre" onChange={this.handleChange} value={this.state.form && this.state.form.nombre}/>
          <br />
          <label>Edad</label>
          <br />
          <input type="text" className="form-control" name="edad" onChange={this.handleChange} value={this.state.form && this.state.form.edad}/>
          <br />
          <label>Sexo: </label>
          <br />
          <input type="text" className="form-control" name="sexo" onChange={this.handleChange} value={this.state.form && this.state.form.sexo}/>
          <br />
          <label>Salario: </label>
          <br />
          <input type="text" className="form-control" name="salario" onChange={this.handleChange} value={this.state.form && this.state.form.salario}/>
          
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={()=>this.peticionPut()}>Editar</button>{"   "}
        <button className="btn btn-danger" onClick={()=>this.setState({modalEditar: false})}>Cancelar</button>
      </ModalFooter>
    </Modal>
      </div>
    );
  }
}

export default App;
