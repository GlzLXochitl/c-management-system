import React from 'react';
import 'animate.css';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header>  
               <nav class="navbar navbar-expand-md navbar-dark fixed-top nav-color">
                    <div className='col-2 col-md-2 col-lg-9'>
                        <a className="navbar-brand" href="#!" id="logotype">
                            <div className="logotype logotype-border">
                                <div>
                                    <img src="/images/utmaLogotype.png" width="33px" height="33px" alt="Logotype" />
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="links-design collapse navbar-collapse col-lg-3 " id="navbarsExampleDefault">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item"><Link to="/userDashboard" className="nav-link UserDashboard">Inicio</Link></li>
                            <li class="nav-item"><Link to="/profile" className="nav-link UserDashboard">Perfil</Link></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#!" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Opciones</a>
                                <div class="dropdown-menu menu" aria-labelledby="navbarDropdownMenuLink">     
                                    <h6 className="dropdown-header title-section-menu menu-op">Seguridad y Privacidad</h6>
                                    <Link to="/password" className="dropdown-item menu">Cambiar mi contraseña</Link>
                                    <Link to="/privacy" className="dropdown-item menu">Privacidad</Link>
                                    <br />     
                                    <h6 className="dropdown-header title-section-menu menu-op">Soporte y Ayuda</h6>
                                    <Link to="/help" className="dropdown-item menu">Centro de ayuda</Link>
                                </div>
                            </li>
                            <li class="nav-item"><Link to="/" className="nav-link UserDashboard" id="logout">Sign out</Link></li>                            
                        </ul>
                       
                    </div>
                </nav>

        </header>
    );
}

export default Header;