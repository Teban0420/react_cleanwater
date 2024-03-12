import { useEffect, useState } from 'react';
import adminAxios from '../../config/axios';


export const Users = () => {

  const [users, setUsers] = useState([]);
  

  useEffect( () => {  

    const peticion = async () => {

        const respuesta = await adminAxios.get('/all');      
        setUsers(respuesta.data.usuarios);      
    }

    peticion();
      
  }, [users]);
  

  const eliminar = (id ) => {
    eliminar_user(id);
  }

  const eliminar_user = async (id) => {      
    const peticion = await adminAxios.delete(`/users/${id}`);
  }

  const llamar = async (id) => {
    const actualizar = await adminAxios.put(`/llamar_user/${id}`);

  }
   
    return (
        <ul className="list-group ">
            {users.map(user => (
                <li key={user.id} className="list-group-item my-3">
                    <div className="d-flex justify-content-between align-items-center ">
                        <div >
                            <h5 className="mb-1">{user.nombre}</h5>
                            <p className="mb-1"><strong>Celular:</strong> {user.celular}</p>
                            <p className="mb-1"><strong>Dirección:</strong> {user.direccion}</p>
                            <p className="mb-0"><strong>Zipcode:</strong> {user.zipcode}</p>
                            <p className="mb-0"><strong>Casado:</strong> {user.casado.nombre}</p>
                            <p className="mb-0"><strong>Propietario:</strong> {(!user.propietario) ? 'NO' : 'Si'}</p>
                            <p className="mb-0"><strong>Edad:</strong> {user.edad.rango_edad}</p>
                            <p className="mb-0"><strong>Personas en el hogar:</strong> {user.personas_hogar.cantidad}</p>
                            <p className="mb-0"><strong>Agua proviene de :</strong> {user.agua_proveniente.procedencia_agua}</p>
                            <p className="mb-0"><strong>El agua la consumen de:</strong> {user.agua_hogar}</p>
                            <p className="mb-0"><strong>Calidad del agua:</strong> {user.calidad_agua}</p>
                        </div>

                        <div className='text-center'>
                            {
                              (user.llamado) &&  <p className="alert alert alert-danger" role="alert"><strong>Ya llame</strong></p>
                                
                            }
                            <button type="button" className="btn btn-success m-1" onClick={() => llamar(user.id)}>LLamar</button>
                            <button type="button" className="btn btn-danger" onClick={() => eliminar(user.id)}>Eliminar</button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
  );
           
}