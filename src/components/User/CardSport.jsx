import React, { useState } from 'react';

function CardSport() {
    const [buttonState, setButtonState] = useState({
      text: 'Aplicar',
      backgroundColor: 'btn-primary' 
    });

    const handleButtonClick = () => {
        alert('Hola');
      setButtonState({
        text: 'Solicitud enviada',
        backgroundColor: 'btn-success' 
      });
    };

    
    

    return (
        <>
            {/*CARD SPORT*/}
            <div className='card-dispositon' id='card-dispositon-container'>
                <div className="card" id='card-sports'>
                    <div className="card-body">
                        <div className='sport-status-container'>
                            <h5 className="card-title">E-SPORTS</h5>
                            <div className='availability'>
                                <img src="images/botonVerde.png" className="card-img-top" alt="..."/>
                                <p className="card-text"><small className="text-body-secondary" id="inscripcionesAbiertas">INSCRIPCIONES ABIERTAS</small></p>
                            </div>
                        </div>
                        <div className='description-card-container'>
                            <p className="card-text" id='description-text'>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. <br/><br/>                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>   
                            <div className='contact-container'>
                                <p className="card-text"><small className="text-body-secondary"><strong>Duración:</strong> 13 de Agosto - 13 de Octubre</small></p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Horario:</strong> lun, mie, vie de 16:00 - 18:00 hrs</small></p>
                            </div> 
                            <div className='contact-container'>
                                <p className="card-text"><small className="text-body-secondary"><strong>Coordinador del taller:</strong> Alejandro Carmona Filopondio de Flore</small></p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Correo Electronico:</strong> el.filo.flore@utma.edu.mx</small></p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Telefono:</strong>  (+49) 30 1234567</small></p>
                            </div> 
                        </div>
                    </div>
                    <img src="images/eSports.png" className="card-img-bottom" id="card-img-bottom" alt="..." style={{height: '350px', objectFit: 'cover', width: '100%'}}/>
                    
    {/* ESTE BOTON ES EL QUE DEBE LLAMAR EL FORMULARIO PARA APLICAR */}
                    <button id='apply' type="button" className={`btn ${buttonState.backgroundColor}`} onClick={handleButtonClick}>
                        {buttonState.text}
                    </button>
                </div> 
            </div>
        </>
    );
}

export default CardSport;