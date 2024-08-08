import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'; 

const Login = () => {
  const [userEmail, setuserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate();
  const [AuthenticationBadData, setAuthenticationBadData] = useState(false);
  const [AuthenticationWithoutData, setAuthenticationWithoutData] = useState(false);

  const API_IP_ADDRESS = "http://192.168.1.142:3000";

  // Función para manejar datos incorrectos con temporizador
  const handleBadData = () => {
    setAuthenticationBadData(true);
    setTimeout(() => {
      document.getElementById("badDataMessage").classList.add("fade-out");
      setTimeout(() => {
        setAuthenticationBadData(false);
      }, 3000);
    }, 3000);
  };

  // Función para manejar la ausencia de datos con temporizador
  const handleWithoutData = () => {
    setAuthenticationWithoutData(true);
    setTimeout(() => {
      document.getElementById("withoutDataMessage").classList.add("fade-out");
      setTimeout(() => {
        setAuthenticationWithoutData(false);
      }, 3000);
    }, 3000);
  };

  // Funcion para enviar los datos al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userEmail || !userPassword) {
      handleWithoutData(); 
      return;
    }
    try {
      const url = API_IP_ADDRESS + "/api/userAuth/";       /*('https://192.168.1.142:3000', { email: userEmail, password: userPassword });*/
      var response = await axios.get(url, { 
        params: {
          email: userEmail, 
          password: userPassword
        }
      });
      console.log(response);
      if (response.data) { 
        navigate('/user-dashboard'); 
      } else {
        handleBadData(); 
      }
    } catch (error) {
      handleBadData(); 
      console.log(error);
    }
  };

  /*
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleLogin();
      }
    };

  */

  return (
    <>
      <body id='login-background'>
        <div className="col-md-4 offset-md-4">
          <form onSubmit={handleSubmit}>
            <div className="card card-login my-5">
              <div className="cardbody-color card-content-disposition-login p-lg-3">
                <div className="text-center">
                  {/* IMAGEN DEL PERFIL */}
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1.webp"
                    className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3 avatar-style"
                    width="150px"
                    alt="profile"
                  />
                </div>
                {/* CAMPO DE EMAIL */}
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    value={userEmail}
                    onChange={(e) => setuserEmail(e.target.value)}
                    required 
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
                    required 
                  />
                </div>

                <div id='alert-container'>
                  <div className='alert-container'>
                    {AuthenticationBadData && (
                      <div className="alert alert-danger" id="badDataMessage" role="alert">
                        <img id='alert-icon' src="/images/informacion.png" alt="" />
                        Usuario o contraseña incorrectos
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
                  <button className="btn btn-primary btn-login-style" id="login" type="submit"> {/* type="submit" es basicamente el que activa la autenticasión */}
                    Iniciar sesión
                  </button>
                </div>

                <div id="emailHelp" className="form-text text-center mb-5 text-dark">
                  <Link to="/user-register" className="create-account-style">
                    Registrarte
                  </Link>
                  <br /> 
                  <Link to="/change-password" className="password-recovery-style">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </body>
    </>
  );
};

export default Login;
