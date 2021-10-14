import './App.css';
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap';


function App() {
  const dataEmpleado=[{clave: 0,fotografia:'', nombre:'',edad:'',sexo:'',salario:''}];

  const [data,setData] = useState(dataEmpleado);
  const [modalEditar,setModalEditar] = useState(false);
  const [modalEliminar,setModalEliminar] = useState(false);
  const [modalCrear,setModalCrear] = useState(false);

  const handleChangeImg=()=>{
    let name="fotografia";
    let value=document.getElementById(name).files[0];
    setSeleccionEmp((prevState)=>(
      {
        ...prevState,
        [name]:URL.createObjectURL(value)
      }))
  }





  const [seleccionEmp,setSeleccionEmp] = useState({
    clave:'',
    fotografia:'',
    nombre:'',
    edad:'',
    sexo:'',
    salario :''
  }
  );

  const seleccionarEmpleado =(elemento,caso)=>{
    setSeleccionEmp(elemento);
    (caso ==='Editar')?setModalEditar(true):setModalEliminar(true);
  }


  const handleChange=e=>{
    const{name,value}=e.target;
    setSeleccionEmp((prevState)=>({
      ...prevState,
      [name]:value
    }));
  }

  const editar=()=>{
    var datanueva = data;
    datanueva.map(elemento=>{
      if(elemento.clave===seleccionEmp.clave){
        elemento.fotografia=seleccionEmp.fotografia;
        elemento.nombre=seleccionEmp.nombre;
        elemento.edad=seleccionEmp.edad;
        elemento.sexo=seleccionEmp.sexo;
        elemento.salario=seleccionEmp.salario;
      }


    });
    setData(datanueva);
    setModalEditar(false);
  }

const eliminar=()=>{
  setData(data.filter(empleado=>empleado.clave!==seleccionEmp.clave));
  setModalEliminar(false);
}
const abrirModalInsertar=()=>{
  setSeleccionEmp(null);
  setModalCrear(true);

}
const insertar =()=>{
  var valorInsertar=seleccionEmp;
  valorInsertar.clave= data[data.length-1].clave + 1;
  var dataNueva = data;
  dataNueva.push(valorInsertar);
  setData(dataNueva);
  setModalCrear(false);
}
  return (
    <div className="App">
      <h2>Datos empleados</h2>
      <br/>
      <div >
        <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Insertar</button>
      </div>
      <br/>
      <br/>
      {data.length ===1 ?(
         <li className="list-group-item text-center">No existen registros</li>
      ):(
        <table className="table table-bordered">
        <thead>
          <tr>
            <th>Clave</th>
            <th>Fotografía</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Sexo</th>
            <th>Salario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
          (data.length==1)?null:data.slice(1,data.length).map(elemento=>(
            <tr>
            <td>{elemento.clave}</td>
            <td> <img src= {elemento.fotografia}></img></td>
            <td>{elemento.nombre}</td>
            <td>{elemento.edad}</td>
            <td>{elemento.sexo}</td>
            <td>{elemento.salario}</td>
            <td>
              <button className="btn btn-primary" onClick={()=>seleccionarEmpleado(elemento,'Editar')}>Editar</button>
              <button className="btn btn-danger" onClick={()=>seleccionarEmpleado(elemento,'Eliminar')}>Eliminar</button>
            </td>
            </tr>
          ))


          }
        </tbody>  
      </table>
      )}
      <Modal isOpen={modalEditar}>
        <ModalHeader>   
          <div>
            <h3>Actualizar Empleado</h3>
          </div>     
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Clave</label>
            <input className="form-control" readOnly type="text" name="clave" value={seleccionEmp && seleccionEmp.clave}  onChange={handleChange}></input>
            <br/>
            <label> Fotografia </label>
            <br/>
            <input type="file" name="fotografia" id="fotografia"  onChange={handleChangeImg} ></input>
            <br/>
            <label>Nombre</label>
            <input className="form-control"  type="text" name="nombre" value={seleccionEmp && seleccionEmp.nombre}  onChange={handleChange}></input>
            <br/>
            <label>Edad</label>
            <input className="form-control"  type="text" name="edad" value={seleccionEmp && seleccionEmp.edad}  onChange={handleChange}></input>
            <br/>
            <label>Sexo</label>
            <input className="form-control"  type="text" name="sexo" value={seleccionEmp && seleccionEmp.sexo}  onChange={handleChange}></input>
            <br/>
            <label>Salario</label>
            <input className="form-control"  type="text" name="salario" value={seleccionEmp && seleccionEmp.salario}  onChange={handleChange}></input>         
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>editar()}>Actualizar</button>
          <button className="btn btn-danger" onClick={()=>setModalEditar(false)}>Cancelar</button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEliminar}>
        <ModalBody>¿Estas seguro que deseas borrar datos del empleado {seleccionEmp && seleccionEmp.nombre}?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>eliminar()}>Sí</button>
          <button className="btn btn-secondary" onClick={()=>setModalEliminar(false)}>No</button>
        </ModalFooter>  
      </Modal>

      <Modal isOpen={modalCrear}>
        <ModalHeader>
          <div>
            <h3>Insertar Empleado</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label> Clave</label>
            <input className="form-control" readOnly type="text" name="clave" value={data[data.length-1].clave + 1}/>
            <br/>
            <label> Fotografia </label>
            <br/>
            <input type="file" name="fotografia" id="fotografia"  onChange={handleChangeImg} ></input>
            <br/>

            <label> Nombre</label>
            <input className="form-control" onChange={handleChange} type="text" name="nombre" value={seleccionEmp ? seleccionEmp.nombre:''}/>
            <br/>
            <label> Edad</label>
            <input className="form-control" onChange={handleChange} type="text" name="edad" value={seleccionEmp ? seleccionEmp.edad:''}/>
            <br/>
            <label> Sexo</label>
            <input className="form-control" onChange={handleChange} type="text" name="sexo" value={seleccionEmp ? seleccionEmp.sexo:''}/>
            <br/>
            <label> Salario</label>
            <input className="form-control" onChange={handleChange} type="text" name="salario" value={seleccionEmp ? seleccionEmp.salario:''}/>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>insertar()}>Insertar</button>
          <button className="btn btn-danger" onClick={()=>setModalCrear(false)}>Cancelar</button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
