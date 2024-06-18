import { useState } from 'react'
import { userData } from '../mocks/data.js';

function Sports() {

    const { 
        extracurricularAct,
        aboutStudent,
        studentData,
    } = userData;

    console.log(userData);

    var [schedule, setSchedule] = useState({ actividad: "Baloncesto", lunes: "16:00", martes: "-", miercoles: "16:00", jueves: "-", viernes: "16:00", tallerista: "Jacob Escareño", email: "jescareño@utma.edu.mx"});

    function futbol() {
        setSchedule({actividad: "Futbol", lunes: "17:00", martes: "17:00", miercoles: "17:00", jueves: "-", viernes: "-", tallerista: "Carlos Galindo", email: "cgalindo@utma.edu.mx"});
    }
    function baloncesto() {
        setSchedule({actividad: "Baloncesto", lunes: "16:00", martes: "-", miercoles: "16:00", jueves: "-", viernes: "16:00", tallerista: "Jacob Escareño", email: "jescareño@utma.edu.mx"});
    }
    function ajedrez() {
        setSchedule({actividad: "Ajedrez", lunes: "15:00", martes: "15:00", miercoles: "-", jueves: "-", viernes: "15:00", tallerista: "Eduardo Corpus", email: "ecorpus@utma.edu.mx"});
    }
    function voleibol() {
        setSchedule({actividad: "Voleibol", lunes: "15:00", martes: "-", miercoles: "16:00", jueves: "-", viernes: "16:00", tallerista: "Xochitl Leos", email: "xleos@utma.edu.mx"});
    }
    function tochito() {
        setSchedule({actividad: "Tochito", lunes: "17:00", martes: "-", miercoles: "-", jueves: "17:00", viernes: "17:00", tallerista: "Emilio Romo", email: "eromo@utma.edu.mx"});
    }

    return (
        <>
            <div> 
                {/* BODY: CONTENT */}
                <div className='jumbotron' id='content'>
                    <div>
                        <div className="row">
                            {/* BODY: CONTAINER INFORMATION */}
                            <div className="col-lg-8 container-info-disposition">

                                {/* ABOUT THE STUDENT */}
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="mb-4">{schedule.actividad}</h5>
                                        <p className="text-muted">
                                            {aboutStudent.text}
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-around'>
                                    <button className='btn btn-primary' onClick={futbol}>Futbol</button>
                                    <button className='btn btn-primary' onClick={baloncesto}>Baloncesto</button>
                                    <button className='btn btn-primary' onClick={ajedrez}>Ajedrez</button>
                                    <button className='btn btn-primary' onClick={voleibol}>Voleibol</button>
                                    <button className='btn btn-primary' onClick={tochito}>Tochito</button>
                                </div>
                                {/* EXTRACURRICULAR ACTIVITY */}
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="mb-4">Extracurricular activity </h5>
                                        <div className='disposition'>
                                            <div className='list'>
                                                <div className='camp-space'><span className="camp-design">Activity</span></div>
                                                <div className='camp-space'><span className="camp-design">Length</span></div> 
                                                <div className='camp-space'><span className="camp-design">Schedule</span></div> 
                                            </div>
                                            <div className="list">                                            
                                                <div className='camp-space'><span className='camp-text'>{extracurricularAct.name}</span></div>                                              
                                                <div className='camp-space'><span className='camp-text'>{extracurricularAct.startedDate} - {extracurricularAct.finishedDate}</span></div>                                        
                                                <div className='camp-space element-list text-muted mb-0 schedule-disposition'>
                                                    <div className=''>
                                                        <ul className="no-bullets">
                                                            <li>Monday</li>
                                                            <li>Tuesday</li>
                                                            <li>Wednesday</li>
                                                            <li>Thursday</li>
                                                            <li>Friday</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <ul className="no-bullets">
                                                            <li>{schedule.lunes}</li>
                                                            <li>{schedule.martes}</li>
                                                            <li>{schedule.miercoles}</li>
                                                            <li>{schedule.jueves}</li>
                                                            <li>{schedule.viernes}</li>
                                                        </ul>
                                                    </div>    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                                        
                            </div>

                            {/* PHOTO CONTAINER */}
                            <div className="col-lg-4">
                                <div className="card mb-4">
                                    <div className="card-body text-center">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6.webp"
                                            alt="avatar"
                                            className="rounded-circle img-fluid tutor-avatar"                                            
                                        />
                                        <h5 className="my-3">
                                            {schedule.tallerista}
                                        </h5>
                                    </div>
                                    <div>
                                        <hr />
                                    </div>
                                    <div>
                                        {/* CONTACT */}
                                        <div className='disposition'>
                                            <div className='list'>
                                                <p className='camp-space camp-design'>Tallerista:</p>
                                                <p className='camp-space camp-text'>{schedule.tallerista}</p>
                                                <p className='camp-space camp-design'>Email:</p>
                                                <p className='camp-space camp-text'>{schedule.email}</p>
                                            </div>                             
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>     
        
        </>
    );
}

export default Sports;
