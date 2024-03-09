import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';

export const Sidebar = () => {

    const [auth, setAuth ] = useContext(ApiContext);
    const navigate = useNavigate();

    const cerrarSesion = () => {

        setAuth({
            token: '',
            auth: false
        })

        localStorage.setItem('token', '');

        navigate('/');
    }

    return(
    <>
        <div className="sidebar">
            <h2>CleanWater</h2>
            <ul className="nav flex-column">

                <li className="nav-item">

                    <NavLink
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''} nav-link`}                          
                        to="users"
                    >
                        Users
                    </NavLink>

                </li> 
                
                <button 
                    className="btn btn-danger"  
                    type='button'
                    onClick={cerrarSesion}
                >
                     Salir
                </button>

            </ul>
        </div>        
    </>
    )
}