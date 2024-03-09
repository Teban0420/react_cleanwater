import { NavLink } from 'react-router-dom';
import { Formulario } from './Formulario';
import imagen from './imagen.jpg';


export const Home = () => {

    return(
        <>            
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary p-4">            

                <div className="navbar-collapse">

                    <div className="navbar-nav ms-auto right">  

                        <NavLink 
                            className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''} `} 
                            to="/login"
                        >
                            <i className="fa-solid fa-right-to-bracket">&nbsp;Login</i>                           
                           
                        </NavLink>
                    </div>
                </div>
            </nav>
            
            <div className="container mt-5">
   
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                        
                                <div className="mb-3">
                                    <img src={imagen} className="img-fluid" alt="Imagen" />
                                </div>

                                <h5 className="card-title text-center">Get Your Free Water Test Kit</h5>
                       
                                <Formulario />

                                <div className="text-center mt-3">
                                    <small>
                                        By clicking 'Get My Free Kit', you agree to be contacted by Leaf Home Water 
                                        Solutions via phone or email.
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}