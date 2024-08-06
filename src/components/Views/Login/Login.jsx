import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

function Login() {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigate = useNavigate();
    const [AuthenticationBadData, setAuthenticationBadData] = useState(false);
    const [AuthenticationWithoutData, setAuthenticationWithoutData] = useState(false);

    // Función para manejar datos incorrectos con temporizador
    const handleBadData = () => {
      setAuthenticationBadData(true);
      setTimeout(() => {
        // Aquí, en lugar de simplemente ocultar el mensaje, inicia la animación
        document.getElementById("badDataMessage").classList.add("fade-out");
        setTimeout(() => {
          setAuthenticationBadData(false); // Finalmente, oculta el mensaje después de la animación
        }, 3000); // Asegúrate de que este temporizador coincida con la duración de tu animación
      }, 3000);
    };

    // Función para manejar la ausencia de datos con temporizador
    const handleWithoutData = () => {
      setAuthenticationWithoutData(true);
      setTimeout(() => {
        // Inicia la animación para desvanecer
        document.getElementById("withoutDataMessage").classList.add("fade-out");
        setTimeout(() => {
          setAuthenticationWithoutData(false); // Oculta el mensaje después de la animación
        }, 3000); // Coincide con la duración de la animación
      }, 3000);
    };

    const handleLogin = () => {
      if (!userName || !userPassword) {
        handleWithoutData();
      } else if (userName === "corpus" && userPassword === "1234") {
        navigate('/admin-dashboard');
      } else if (userName === "edith" && userPassword === "1234") {
        navigate('/user-dashboard');
      } else if (userName === "emilio" && userPassword === "1234") {
        navigate('/teacher-dashboard');
      } else {
        handleBadData();
      }
    };
    
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleLogin();
      }
    };
    
    

    return (
        <>
            {/* CONTENEDOR PRINCIPAL DEL FORMULARIO DE LOGIN */}
            
            {/* Modificasion del fondo del login, colocar una imagen con transparecia a azul */}
                  <body id='login-background'>
                    <div className="col-md-4 offset-md-4">
                        {/* TARJETA DE LOGIN */}
                        <div className="card card-login my-5">
                          
                            <div className="cardbody-color card-content-disposition-login p-lg-3">
                                <div className="text-center">
                                    {/* IMAGEN DEL PERFIL */}
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1.webp" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3 avatar-style" width="150px" alt="profile"/>
                                </div>
                                {/* CAMPO DE USERNAME */}
                                <div className="mb-3">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Nombre de usuario"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                    />                                
                                </div>
                                {/* CAMPO DE PASSWORD */}
                                <div className="mb-3">
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="Contraseña"
                                        value={userPassword}
                                        onChange={(e) => setUserPassword(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                    />                                
                                </div>

                                <div id='alert-container'>
                                    <div className='alert-container'>
                                        {AuthenticationBadData && (
                                            <div className="alert alert-danger" id="badDataMessage" role="alert">
                                                <img id='alert-icon' src="/images/informacion.png" alt="" />
                                                User or password incorrect
                                            </div>
                                        )}
                                    </div>

                                    <div id='alert-container'>
                                        {AuthenticationWithoutData && (
                                            <div className="alert alert-danger" id="withoutDataMessage" role="alert">
                                                <img id='alert-icon' src="/images/informacion.png" alt="" />
                                                Llena los datos para autenticarte
                                            </div>
                                        )}
                                    </div>

                                </div>
                                
                                {/* BOTÓN DE LOGIN */}
                                <div className="text-center">
                                    <button className="btn btn-primary btn-login-style" id="login" onClick={handleLogin}>Iniciar sesión</button>
                                </div>
                                <div id="emailHelp" className="form-text text-center mb-5 text-dark">
                                  <Link to="/" className=" create-account-style">Registrarte</Link><br/>  {/* create-account */}
                                  <Link to="/change-password" className="password-recovery-style">¿Olvidaste tu contraseña?</Link>
                                </div>
                            </div>  
                        </div>
                    </div>
                  </body>
            
        </>
    );
}

export default Login;
