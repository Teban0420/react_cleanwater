
import { useNavigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Users } from './Users';
import { useContext, useEffect} from 'react';
import { ApiContext } from '../../context/apiContext';

export const Admin = () => {

    const navigate = useNavigate();
    const [auth, setAuth] = useContext(ApiContext);

    useEffect( () => {
        if(auth.token === ''){  
            navigate('/');
        }
    });

    return(
        <>
            <div className='contenedor-sm'>         

                <Sidebar />

                <div className="content">
                    <h2 className='text-center'>Bienvenido Admin</h2>
                    <Users />                    
                </div>
            </div>
        </>
    )
}