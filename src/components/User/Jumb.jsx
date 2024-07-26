import React from 'react';
import { Link } from 'react-router-dom';

function Jumb() {
    return (
        <div className='main-body'>
            {/* JUMBOTRON PRINCIPAL */}
            <div className="jumbotron jumbotron-fluid" id="jumbotron">
                <div className="container">

                    {/* success alert for notifications */}
                    {/* 
                    <div className="alert alert-success text-left alert-dismissible fade show alert-click" role="alert">
                        <div className='menssage-notification-alert'>
                            <strong>Hola Edith!</strong>
                            <span className='menssage-alert'>Tienes una notificación.</span>
                            <strong><Link to="/notifications" className="nav-link link-style"> Da click aqui para ver tus notificaciones.</Link></strong> 
                        </div>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    */}

                    <div className="row">
                        <div className="col-lg-4 color-welcome">
                            <h1 className="display-4">
                                {/*En esta parte el texto sera dependiendo el usuario con secion iniciada: 
                                    * para el maestro sera: "Un placer trabajar contigo"
                                    * para el alumno sera: "Bienvenido al lugar de las oportunidades"
                                    * para el administrador sera: "Administración de talleres y deportes" -> Para este el tamaño de largo sera mas ajustado para mas estetica y mustrar una diferencia entre los otros usuarios y el administrador
                                */}
                                <span className="text-primary color-welcome">Bienvenido </span> al <span className="text-primary color-welcome">lugar</span> de las <span className="text-primary color-welcome">oportunidades</span> 
                                
                            </h1>
                            <p className="lead">Universidad Tecnológica Metropolitana</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Jumb;
