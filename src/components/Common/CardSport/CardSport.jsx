import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { userData } from '../../../mocks/data.js';

//import '../../styles/views/common/cardSport.css';

function CardSport() {

    const { 
        cardSport
    } = userData;

    console.log(userData);

    const [ courses, setCourses ] = useState([]) //courses
    const [ coordinatorName, setCoordinatorName ] = useState([]) //courses

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
                const response = await axios.get('http://localhost:3001/api/active_courses/1');
                console.log(response);
                setCourses(response.data);
            } catch (error) {
                console.log(error);
            }        
        }
        getCourses();
      }, [])

      useEffect(() => {
        const getCoordinatorName = async () => {
            try {
                
                const response = await axios.get('http://localhost:3001/api/user/');
                console.log(response);
                setCourses(response.data);
            } catch (error) {
                console.log(error);
            }        
        }
        getCoordinatorName();
      }, [])

      // const response = await axios.get('http://10.11.3.218:3000/api/getCourses');

    return (
        <>
            {/* C   RD SPORT */}
            <div className='container mt-4'>
                <div className="card card-cardsport">
                        <div className="card-body card-body-sports">
                            <h5 className="card-title">{cardSport.sportName}</h5>
                            
                            {/*<div className="d-flex align-items-center mb-3">
                                <img src="images/botonVerde.png" className="card-img-top" alt="Disponibilidad" />
                                <p className="card-text ms-2 mb-0"><small className="text-success">INSCRIPCIONES ABIERTAS</small></p>
                            </div>*/}
                            
                            <div>
                                <div>
                                    <table border="1">
                                        <thead>
                                            <tr>
                                                <th>Coordinator</th>
                                                <th>Schedule</th>
                                                <th>Credits obtained</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {courses.map(crs => {
                                                return (
                                                <tr key={crs.coordinator_user_id}>
                                                    <td>{crs.coordinator_user_id}</td>
                                                    <td>{crs.schedule}</td>
                                                    <td>{crs.credits_obtained}</td>
                                                </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                {!courses ? "nosta" : "sista"}
                            </div>
                            
                            <div>
                                <p className="card-text card-text-info">
                                    {cardSport.sportDescription} 
                                </p>
                            </div>

                            <div className='mb-3 text-container-details'>
                                <p className="card-text"><small className="text-body-secondary"><strong>Duración: </strong>{cardSport.lengthCourse}</small></p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Horario: </strong>{cardSport.schedule}</small></p>
                            </div>
                            <div className='mb-3 text-container-details'>
                                <p className="card-text"><small className="text-body-secondary"><strong>Coordinador del taller: </strong>{cardSport.coordinator}</small></p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Correo electrónico: </strong>{cardSport.email}</small></p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Teléfono: </strong>{cardSport.phone}</small></p>
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
