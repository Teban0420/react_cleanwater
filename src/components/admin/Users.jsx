import { useEffect, useState } from 'react';
import adminAxios from '../../config/axios';


export const Users = () => {

  const [users, setUsers] = useState([]);
  
  const peticion = async () => {
      const respuesta = await adminAxios.get('/all');
      console.log(respuesta.data.usuarios)      
      setUsers(respuesta.data.usuarios);      
  }

  useEffect( () => {      

      peticion();
  }, []);
   
    return (
        <ul className="list-group">
            {users.map(user => (
                <li key={user.id} className="list-group-item my-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-1">{user.nombre}</h5>
                            <p className="mb-1"><strong>Celular:</strong> {user.celular}</p>
                            <p className="mb-1"><strong>Dirección:</strong> {user.direccion}</p>
                            <p className="mb-0"><strong>Zipcode:</strong> {user.zipcode}</p>
                            <p className="mb-0"><strong>Casado:</strong> {user.casado.nombre}</p>
                            <p className="mb-0"><strong>Edad:</strong> {user.edad.rango_edad}</p>
                            <p className="mb-0"><strong>Personas en el hogar:</strong> {user.personas_hogar.cantidad}</p>
                            <p className="mb-0"><strong>Agua proviene de :</strong> {user.agua_proveniente.procedencia_agua}</p>
                            <p className="mb-0"><strong>El agua la consumen de:</strong> {user.agua_hogar}</p>
                        </div>
                        <button type="button" className="btn btn-primary">Edit</button>
                    </div>
                </li>
            ))}
        </ul>
  );
           
}