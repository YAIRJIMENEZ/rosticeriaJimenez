import React from 'react'
import { BrowserRouter, Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    const root = process.env.PUBLIC_URL;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark">
           
            <Link 
                className="navbar-brand" 
                to={`${root}/`}
            >
                Servicios/Productos
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to={`${root}/`}
                    >
                        Carniceria
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to={`${root}/`}
                    >
                        Rosticeria
                    </NavLink>
                  
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to={`${root}/`}
                    >
                        Contacto
                    </NavLink>
                </ul>
            </div>
           
        </nav>
    )
}