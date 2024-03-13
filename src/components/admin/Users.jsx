import { useContext, useEffect, useState } from 'react';
import adminAxios from '../../config/axios';
import { ApiContext } from '../../context/apiContext';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../layout/Spinner';


export const Users = () => {

  const [users, setUsers] = useState([]);

  // usar context
  const [ auth, setAuth] =  useContext(ApiContext);
  const navigate = useNavigate();
  
  useEffect( () => {  

    if(auth.token !== ''){

        try {

          const peticion = async () => {

            const respuesta = await adminAxios.get('/all', {
              headers: {
                Authorization: `Bearer ${auth.token}`               
              }
            });   
  
            setUsers(respuesta.data.usuarios);      
          }

          peticion();
          
        } catch (error) {
          // error de autorizacion
          navigate('/login');
          // if(error.response.status == 500){
          // }          
        }
       
    }
    else{
        navigate('/login');
    }

   
      
  }, [users]);  

  const eliminar = (id ) => {
    eliminar_user(id);
  }

  const eliminar_user = async (id) => {   
    
    try {
      const peticion = await adminAxios.delete(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        });

        peticion();
      
    } catch (error) {
      console.log(error);     
    }
  }

  const llamar = (id) => {
    llamar_user(id);
  }

  const llamar_user = async (id) => {
    const actualizar = await adminAxios.put(`/llamar_user/${id}`);
  }

  // si el state esta false

  // si no hay clientes
   if(!users.length) return <Spinner />

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

                    </div>
                        <div className='text-end pt-2'>
                            {
                              (user.llamado) &&  <p className="alert alert-danger text-center" role="alert"><strong>Ya llame</strong></p>
                                
                            }
                            <button type="button" className="btn btn-success m-2" onClick={() => llamar(user.id)}>LLamar</button>
                            <button type="button" className="btn btn-danger" onClick={() => eliminar(user.id)}>Eliminar</button>
                        </div>
                </li>
            ))}
        </ul>
       
  );
           
}