import { NavLink } from 'react-router-dom';
import { Formulario } from './Formulario';
import logo from './logo.jpg'
import imagen from './imagen.jpg';
import { Imagen } from './Imagen';


export const Home = () => {

    return(
        <>    
            <header className=''>     
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary p-4">            

                    <div className="navbar-collapse navegacion">

                        <div className="navbar-nav"> 
                            <img src={logo} className='logo' alt="clean water" />
                        </div>

                        <div className="navbar-nav ms-auto right">      

                            <span 
                                className="nav-item nav-link "                            
                            >
                                <i className="fa-brands fa-whatsapp">&nbsp;5613658085</i>                        
                            
                            </span>                  

                            <NavLink 
                                className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''} `} 
                                to="/login"
                            >
                                <i className="fa-solid fa-right-to-bracket">&nbsp;Login</i>                           
                            
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </header>   

            <Imagen />

            <figure className="container-sm text-center parrafo">

                <blockquote className="blockquote">
                    <strong>Por tiempo limitado y sólo para algunos Zip Codes en el Sur de la Florida.</strong>
                </blockquote> 

                <figcaption className="blockquote text-center">
                  Descubre si calificas para recibir un sistema de purificación de agua de última 
                  generación y obtén un análisis gratuito del agua en tu hogar.
                  Califica ahora y garantiza un hogar más saludable con agua pura y limpia para todos!                               
                   
                </figcaption>               
            </figure>
            
            <div className="container mt-5">
   
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                        
                                {/* <div className="mb-3">
                                    <img src={imagen} className="img-fluid" alt="Imagen" />
                                </div> */}

                                <h5 className="card-title text-center">Complete la siguiente información</h5>

                                <Formulario />

                                <div className="text-center mt-3">
                                    <small>
                                        By clicking 'Get My Free Kit', you agree to be contacted by Leaf Home Water 
                                        Solutions via phone.
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