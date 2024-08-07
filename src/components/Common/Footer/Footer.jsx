import React from 'react'
import { userData } from '../../../mocks/data.js';

//import '../../styles/layout/footer.css';

function Footer() {

  const { 
    footer
  } = userData;

  console.log(userData);

    return (
        <div className="footer-complet-contact">
          {/* BLOQUE PRINCIPAL DE CONTENIDO DEL PIE DE PÁGINA */}
          <div className="container">
            {/* FILA PRINCIPAL DEL PIE DE PÁGINA */}
            <div className="row distance-row">
              {/* COLUMNA CON LOGOTIPO Y TEXTO DEL PIE DE PÁGINA */}
              <div className="distans col-md-10 col-lg-8 col-xl-6 mb-md-0 mb-4">
                <div className="logotype" id="footer-logo">
                  <div>
                    <img src="images/utmaLogotype.png" width="40px" height="40px" alt="" /> {/* logo image */}
                  </div>
                  <div className="nameLogotype">
                    <div className="utma">
                      {footer.utma}
                    </div>
                   
                  </div>
                </div>
                
              </div>
              {/* COLUMNA CON INFORMACIÓN DE CONTACTO */}
              <div className="contact-disposition uper col-md-10 col-lg-8 col-xl-4 mb-md-0 mb-4">
                <p>
                  <i className="fas fa-phone me-3"></i>
                  <span className="details">Dirección:</span> 
                  <p>{footer.ubication}</p> {/* address */}
                </p>
                <p>
                  <i className="fas fa-print me-3"></i>
                  <span className="details">Teléfono:</span> 
                  <p>{footer.phone}</p> {/* phone number */}
                </p>
                
              </div>
            </div>
            {/*<hr className="line" /> horizontal line */}
            {/* BLOQUE CON REDES SOCIALES Y COPYRIGHT */}
            <div className="redes">
              <ul className="nav col-md-6 justify-content-center list-unstyled d-flex">
                <li>
                  <a href="https://utma.edu.mx" target="blank">
                    <img className="utma-footer" src="images/utmaLogotype.png" alt="UTMA" /> {/* UTMA logo link */}
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/UTMABiS/?locale=es_LA" target="blank">
                    <img className="utma-footer" src="images/facebook.png" alt="Facebook" /> {/* Facebook link */}
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@utmetropolitana" target="blank">
                    <img className="utma-footer" src="images/tik.png" alt="TikTok" /> {/* TikTok link */}
                  </a>
                </li>
                <li>
                  <a href="#!" target="blank">
                    <img className="utma-footer" src="images/whatsapp.png" alt="WhatsApp" /> {/* WhatsApp link */}
                  </a>
                </li>
              </ul>
            </div>
            <div className="Copyright">
            <div className="col-md-6 d-flex align-items-center justify-content-center list-unstyled d-flex">
                <span className="mb-3 mb-md-0 text-muted">{footer.copyright}</span> {/* copyright */}
              </div>
              </div>
          </div>
        </div>
    );
}

export default Footer;

