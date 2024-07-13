import React from 'react';
import 'animate.css';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header>  
               <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="#!" id="logotype">
                        <div className="logotype">
                            <div>
                                <img src="/images/utmaLogotype.png" width="38px" height="40px" alt="Logotype" />
                            </div>
                        </div>
                    </a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item"><Link to="/userDashboard" className="nav-link UserDashboard">Inicio</Link></li>
                            <li class="nav-item"><Link to="/profile" className="nav-link UserDashboard">Perfil</Link></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#!" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Configuración</a>
                                <div class="dropdown-menu menu" aria-labelledby="navbarDropdownMenuLink">     
                                    
                                    {/*<h6 className="dropdown-header title-section-menu">Preferencias de Usuario</h6>     
                                    <div className='status-disposition'>
                                        <Link to="" className="dropdown-item">Idioma</Link>
                                        <img className='status-button' id='idioma' src='/images/es.png' alt='Idioma button' />
                                    </div>       
                                    <div className='status-disposition'>
                                        <Link to="" className="dropdown-item">Tema</Link>
                                        <img className='status-button' id='them' src='/images/modoClaro.png' alt='Tema button' />
                                    </div>  
                                    <div className='status-disposition'>
                                        <Link to="/notifications" className="dropdown-item">Notificaciones</Link>
                                        <img className='status-button' id='notification' src='/images/botonVerde.png' alt='Notifications button' />
                                    </div>
                                    <div className="dropdown-divider custom-divider"></div>    
                                    */}

                                    <h6 className="dropdown-header title-section-menu">Seguridad y Privacidad</h6>
                                    <Link to="/password" className="dropdown-item">Cambiar mi contraseña</Link>
                                    <Link to="/privacy" className="dropdown-item">Privacidad</Link>
                                    <div className="dropdown-divider custom-divider"></div>           
                                    <h6 className="dropdown-header title-section-menu">Soporte y Ayuda</h6>
                                    <Link to="/help" className="dropdown-item">Centro de ayuda</Link>

                                    {/*<Link to="/comments" className="dropdown-item">Enviar comentarios</Link>*/}

                                    <div className="dropdown-divider custom-divider"></div> 
                                    <Link to="/" className="dropdown-item" id="logout">Log out</Link>
                                </div>

                            </li>
                        </ul>
                    </div>
                </nav>

        </header>
    );
}

export default Header;
