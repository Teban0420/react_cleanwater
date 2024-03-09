import { NavLink } from 'react-router-dom';


export const Login = () => {

    return(
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary p-2">            

                <div className="navbar-collapse">
                    <div className="navbar-nav align-self-end">  

                        <NavLink  
                            className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''} `}                          
                            to="/"
                        >
                           Home
                        </NavLink>
                    </div>
                </div>
            </nav>
           
            <div className="container vh-100">
                <div className="row h-100 justify-content-center align-items-center">

                    <div className="col-md-6 ">
                        <div className='text-center'>
                            <img src alt="Logo" class="img-fluid my-4" style={{"max-width": "50px;"}} />
                        </div>               
                        <form>

                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email </label>
                               
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder=' ej: name@correo.com'   
                                    required                                 
                                />

                                <div class="invalid-feedback">
                                    Ingresa un email válido.
                                </div>
                                
                            </div>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder='password' 
                                required 
                            />
                        </div>
        
                        <button type="submit" className="btn btn-primary">Ingresar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}