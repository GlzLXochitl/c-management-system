import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { userData } from '../../../mocks/data.js';
//import { config } from 'dotenv';


//import '../../styles/views/common/cardSport.css';

const API_IP_ADDRESS = "http://192.168.1.142:3000";

function CardSport() {

    const { 
        cardSport
    } = userData;

    console.log(userData);

    const [ courses, setCourses ] = useState([]) //courses

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

    //integración 
    useEffect(() => {
        const getCourses = async () => {
            try {
                const url = API_IP_ADDRESS + '/api/courses_names/0';
                var response = await axios.get(url);
                console.log(response);
                setCourses(response.data);
            } catch (error) {
                console.log(error);
            }        
        }
        getCourses();
      }, [])

      // const response = await axios.get('http://10.11.3.218:3000/api/getCourses');

    return (
        <>
            {/* C   RD SPORT */}
            {courses.map(crs => {
                return (
                    <div className='container mt-4'>
                <div className="card card-cardsport">
                        <div className="card-body card-body-sports">
                            <h5 className="card-title">{crs.course_catalog.name}</h5>
                            
                            {/*<div className="d-flex align-items-center mb-3">
                                <img src="images/botonVerde.png" className="card-img-top" alt="Disponibilidad" />
                                <p className="card-text ms-2 mb-0"><small className="text-success">INSCRIPCIONES ABIERTAS</small></p>
                            </div>*/}
                            
                            
                            
                            <div>
                                <p className="card-text card-text-info">
                                    {crs.description} 
                                </p>
                            </div>

                            <div className='mb-3 text-container-details'>
                                <p className="card-text"><small className="text-body-secondary"><strong>Creditos que otorga al terminar: </strong>{crs.credits_obtained}</small></p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Horario: </strong>{crs.schedule}</small></p>
                            </div>
                            <div className='mb-3 text-container-details'>
                                <p className="card-text"><small className="text-body-secondary"><strong>Coordinador del taller: </strong>{crs.user.name} {crs.user.last_name}</small></p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Correo electrónico: </strong>{crs.user.email}</small></p>
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
                    );
                })}
            
        </>
    );
}

export default CardSport;
