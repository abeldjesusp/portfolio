import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Abel De Jesús
            </Link>

            <div className="navbar-collapse collapse d-flex justify-content-end">
                <div className="navbar-nav ml-auto">

                    <NavLink
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/home"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/about"
                    >
                        About
                    </NavLink>

                </div>
            </div>
        </div>

        
    </nav>
  )
}
