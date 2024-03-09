import { NavLink } from "react-router-dom"

export const Sidebar = () => {
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

                <NavLink
                    className="btn btn-danger"                         
                    to="/"
                >
                    Salir
                </NavLink> 

            </ul>
        </div>        
    </>
    )
}