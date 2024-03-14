import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ReactGA from 'react-ga';
import { Formulario } from './Formulario';
import logo from './logo.jpg';
import { Imagen } from './Imagen';


export const Home = () => {

    useEffect( () => {
        ReactGA.pageview(window.location.pathname);
    }, []);

    return(
        <>    
            <header className=''>     
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary p-4">            

                    <div className="navbar-collapse navegacion">

                        <div className="navbar-nav"> 
                            <img src={logo} className='logo' alt="clean water" />
                        </div>

                        <div className="navbar-nav ms-auto right">  

                        
                            <NavLink 
                                className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''} `} 
                                to="https://api.whatsapp.com/send?phone=15613658085"
                            >
                               <i className="fa-brands fa-whatsapp">&nbsp;5613658085</i>                         
                            
                            </NavLink>   

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
                               
                                <h5 className="card-title text-center">Complete la siguiente información</h5>

                                <Formulario />

                                <div className="text-center mt-3">
                                    <small>
                                    Al hacer click en "enviar" estará de acuerdo en ser contactado por 
                                    nosotros para agendar su análisis gratuito al agua.
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