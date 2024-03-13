import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import adminAxios from '../../config/axios';
import { useContext, useState } from 'react';
import { ApiContext } from '../../context/apiContext';
import logo from '../home/logo.jpg';


export const Login = () => {

    const [ auth, setAuth ] = useContext(ApiContext);
    const navigate = useNavigate(); 

    // datos del  form
    const [ credenciales, setCredenciales ] = useState({});

    const leerDatos = e => {

        setCredenciales({
            ...credenciales, // obtengo copia de las credenciales
            [e.target.name]: e.target.value
        })
    }

    const login = async e => {
        e.preventDefault();

        //autenticar admin
        try {

            const respuesta = await adminAxios.post('/login', credenciales);            
            const { token } = respuesta.data;            
            localStorage.setItem('token', token);

            // cambio el state
            setAuth({
                token: token,
                auth: true
            }) 

            // redireccionar
            navigate('/admin');

            
        } catch (error) {
            
            if(error.response){

                Swal.fire({
                    type: 'error',
                    icon: 'error',
                    title: 'Ooops hubo un error',
                    text: error.response.data.msg
                })
            }
            else{
                Swal.fire({
                    type: 'error',
                    icon: 'error',
                    title: 'Ooops algo salio mal!',
                    text: 'Hubo un error'
                })   
            }
            
        }
    }

    return(
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary p-2">            

                <div className="navbar-collapse">
                    <div className="navbar-nav align-self-end">  

                        <NavLink  
                            className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''} `}                          
                            to="/"
                        >
                        <div className="navbar-nav"> 
                            <img src={logo} className='logo' alt="clean water" />
                        </div>
                           
                        </NavLink>
                    </div>
                </div>
            </nav>
           
            <div className="container vh-100">
                <div className="row h-100 justify-content-center align-items-center">

                    <div className="col-md-8">                        
                        <div className="card">
                            <div className="card-body">                            
                            <h5 className="card-title text-center">Login</h5>
                           
                            <form onSubmit={login}>

                                <div className="mb-3">
                                    <label className="form-label">Email </label>
                                
                                    <input 
                                        type="email" 
                                        name='email'
                                        className="form-control" 
                                        placeholder=' ej: name@correo.com'   
                                        required  
                                        onChange={leerDatos}                               
                                    />

                                    <div className="invalid-feedback">
                                        Ingresa un email válido.
                                    </div>
                                
                                 </div>

                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        name='password'
                                        className="form-control" 
                                        placeholder='password' 
                                        required 
                                        onChange={leerDatos}
                                    />
                                </div>
        
                                <button type="submit" className="btn btn-primary">Ingresar</button>
                            </form>
                        </div>
                     </div>
                  </div>
                </div>
            </div>
            
        </>
    )
}