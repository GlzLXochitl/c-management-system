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
            {/* CARD SPORT */}
            <div className='container mt-4'>
                <div className="card card-cardsport">
                        <div className="card-body card-body-sports">
                            <h5 className="card-title">E-SPORTS</h5>
                            <div className="d-flex align-items-center mb-3">
                                <img src="images/botonVerde.png" className="card-img-top" alt="Disponibilidad" />
                                <p className="card-text ms-2 mb-0"><small className="text-success">INSCRIPCIONES ABIERTAS</small></p>
                            </div>
                            <div>
                                <p className="card-text card-text-info">
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. <br/>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </p>
                            </div>
                            <div className='mb-3 text-container-details'>
                                <p className="card-text"><small className="text-body-secondary"><strong>Duración:</strong> 13 de Agosto - 13 de Octubre</small></p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Horario:</strong> lun, mie, vie de 16:00 - 18:00 hrs</small></p>
                            </div>
                            <div className='mb-3 text-container-details'>
                                <p className="card-text"><small className="text-body-secondary"><strong>Coordinador del taller:</strong> Alejandro Carmona Filopondio de Flore</small></p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Correo Electrónico:</strong> el.filo.flore@utma.edu.mx</small></p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Teléfono:</strong> (+49) 30 1234567</small></p>
                            </div>
                        </div>
                        <div className='card-body-sports-img' >
                            <div className='cardImageContainer'>
                                <img src="images/eSports.png" alt="E-SPORTS"/>
                            </div>
                            <div>
                                {/* En esta parte el boton sera dependiendo el usuario: 
                                    * en el caso del alumno sera: "Aplicar"
                                    * en el caso del maestro sera: "Ver listado de alumnos"
                                    * en el caso del administrador sera: "Visualizar"
                                */}
                                <button type="button" className={`card-img-bottom btn btn-card-style-card-sport-apply ${buttonState.backgroundColor}`} onClick={handleButtonClick}>
                                    {buttonState.text}
                                </button> 
                            </div>
                        </div>                
                </div>
            </div>
        </>
    );
}

export default CardSport;
