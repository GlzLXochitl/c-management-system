import React, { useState } from 'react';  // Importar el hook useState
import { useNavigate } from 'react-router-dom';  // Importar el hook useNavigate
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
      } else if (userName === "corpus" && userPassword === "12345678") {
        navigate('/adminDashboard');
      } else if (userName === "edith" && userPassword === "12345678") {
        navigate('/userDashboard');
      } else if (userName === "emilio" && userPassword === "12345678") {
        navigate('/teacherDashboard');
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
            <div className="logincontainer">
               
                    <div className="col-md-4 offset-md-4">
                        {/* TARJETA DE LOGIN */}
                        <div className="card card-login my-5">
                            <div className="card-body cardbody-color p-lg-3">
                                <div className="text-center">
                                    {/* IMAGEN DEL PERFIL */}
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1.webp" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3 avatar-style" width="150px" alt="profile"/>
                                </div>
                                {/* CAMPO DE USERNAME */}
                                <div className="mb-3">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Username"
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
                                        placeholder="Password"
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
                                    <button className="btn btn-primary btn-login-style" id="login" onClick={handleLogin}>Login</button>
                                </div>
                                {/* TEXTO DE REGISTRO Y MÁS INFORMACIÓN */}
                                <div id="emailHelp" className="form-text text-center mb-5 text-dark">
                                    Not Registered? <br/>
                                    <Link to="/loginNotRegistered" className=" create-account-style"> More information</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
        </>
    );
}

export default Login;
