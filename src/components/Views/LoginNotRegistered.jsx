import React from 'react';  // Importar React
import { AiOutlineInfoCircle } from 'react-icons/ai'; // Importar el icono de información
import { Link } from 'react-router-dom';

function LoginNotRegistered() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
      <div>
        <AiOutlineInfoCircle style={{ fontSize: '5em', color: '#C30E2E' }} />
      </div>
      <div style={{ maxWidth: '90%', padding: '0 20px' }}> {/* Ajusta el maxWidth para asegurar el margen en dispositivos pequeños */}
        <h1 style={{ fontSize: '2rem', color: '#1B5A7D' }}>¿No te encuentras registrado?</h1>
        <p style={{ fontSize: '1rem', fontWeight: '500' }}>Para crear una cuenta en esta plataforma, debes ser un estudiante registrado en la institución. Tu usuario y contraseña debieron ser enviados a tu correo electrónico por el encargado de talleres deportivos y culturales de la Universidad Tecnológica Metropolitana. Si tienes problemas para iniciar sesión, contacta al administrador de la plataforma al (+xx) xxx xxx xx xx ext. xxxx.</p>
      </div>
      <button type="button" className="btn btn-volver" style={{ marginTop: '20px', background: '#1B5A7D', color: 'white', textDecoration: 'none', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '12px', paddingRight: '12px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Volver al inicio</Link>
      </button>
    </div>
  );
}

export default LoginNotRegistered;