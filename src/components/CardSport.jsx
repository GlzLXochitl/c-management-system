import React from 'react';

function CardSport() {
    return (
        <>
            {/*CARD SPORT*/}
            <div className='card-dispositon' id='card-dispositon-container'>
                <div className="card" id='card-sports'>
                    <div className="card-body">
                        <div>
                            <h5 className="card-title">FUTBOOL</h5>
                            <p className="card-text"><small className="text-body-secondary">Inscripciones abiertas</small></p>
                        </div>
                        <div className='description-card-container'>
                            <p className="card-text" id='description-text'>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. <br/><br/>                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>   
                            <div className='contact-container'>
                                <p className="card-text"><small className="text-body-secondary"><strong>Duración:</strong> 13 de Agosto - 13 de Octubre</small></p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Horario:</strong> lun, mie, vie de 16:00 - 18:00</small></p>
                            </div> 
                            <div className='contact-container'>
                                <p className="card-text"><small className="text-body-secondary"><strong>Coordinador del taller:</strong> Alejandro Carmona Filopondio de Flore</small></p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Correo Electronico:</strong> el.filo.flore@utma.edu.mx</small></p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Telefono:</strong>  (+49) 30 1234567</small></p>
                            </div> 
                        </div>
                    </div>
                    <img src="images/fut.png" className="card-img-bottom" alt="..."/>
                    <button type="button" class="btn btn-primary">Aplicar</button>
                </div>

                
            </div>
            
        </>
    );
}

export default CardSport;