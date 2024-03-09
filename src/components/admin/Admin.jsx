
import { Sidebar } from './Sidebar';
import { Users } from './Users';

export const Admin = () => {
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