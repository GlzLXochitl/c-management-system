import { userData } from '../../mocks/data.js';


function Profile() {

    const { 
        porfile,
        tutor,
        extracurricularAct,
        aboutStudent,
        studentData,
        contactData,
        emergencyContact
    } = userData;

    console.log(userData);

    return (
        <>
        {/* BODY */}
            {/* BODY: JUMBOTRON */}
            <div>
                <div className="jumbotron jumbotron-fluid" id="jumbotron">
                    <div className="container">
                        <div className="row">
                            
                            {/* LEFT COLUMN */}
                            <div className="col-lg-4">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1.webp"
                                    alt="avatar"
                                    className="rounded-circle img-fluid avatar"                                    
                                />
                            </div>
                            {/* RIGHT COLUMN */}
                            <div className="col-lg-8">
                                <div>
                                    <h1 className="display-4">
                                        {porfile.name}
                                    </h1>
                                    <p className="lead">
                                        Estudiante de <b> Desarrollo de software multiplataforma. </b>
                                    </p>
                                    <h1 className='credits'>
                                        Creditos: 40
                                    </h1>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary btn-lg" id='btn-style'>Descargar constancia</button>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>

                {/* BODY: CONTENT */}
                <div className="content">
                    <div>
                        <div className="row">

                            {/* LEFT COLUMN (PHOTO CONTAINER) */}
                            <div className="col-lg-4">
                                <div className="card mb-4">
                                    <div className="card-body text-center">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                            alt="avatar"
                                            className="rounded-circle img-fluid tutor-avatar"                                            
                                        />
                                        <h5 className="my-3">
                                            Alejandro Carmona Filopondio de Flore
                                        </h5>
                                        <p className="text-muted mb-1">
                                            {/*<b>{tutor.charge}</b>*/}
                                            Coordinador
                                        </p>
                                        <p className="text-muted mb-4">
                                            el.filo.flore@utma.edu.mx
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN (CONTAINER INFORMATION) */}
                            <div className="col-lg-8 container-info-disposition">

                                <div className="card mb-4">
                                    <div className="card-body">
                                        {/* BODY: EXTRACURRICULAR ACTIVITY */}
                                        <h5 className="mb-4"> Actividad extracurricular </h5>
                                        <div className='disposition'>
                                            <div className='list'>
                                                <div className='camp-space'><span className="camp-design">Actividad</span></div>
                                                <div className='camp-space'><span className="camp-design">Tallerista</span></div>   
                                                <div className='camp-space'><span className="camp-design">Email de tallerista</span></div>
                                                <div className='camp-space'><span className="camp-design">Duración</span></div> 
                                                <div className='camp-space'><span className="camp-design">Horario</span></div> 
                                            </div>
                                            <div className="list">                                            
                                                <div className='camp-space'><span className='camp-text'>Cuidado de mascotas</span></div>                                            
                                                <div className='camp-space'><span className='camp-text'>Juan Perez Cardona</span></div>                                            
                                                <div className='camp-space'><span className='camp-text'>juan.cardona@utma.edu.mx</span></div>                                            
                                                <div className='camp-space'><span className='camp-text'>{extracurricularAct.startedDate} - {extracurricularAct.finishedDate}</span></div>                                        
                                                <div className='camp-space element-list text-muted mb-0 schedule-disposition'>
                                                    <div className=''>
                                                        <ul className="no-bullets">
                                                            <li>Monday</li>
                                                            <li>Tuesday</li>
                                                            <li>Wednesday</li>
                                                            <li>Thursday</li>
                                                            <li>Friday</li>
                                                            <li>Saturday</li>
                                                            <li>Sunday</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <ul className="no-bullets">
                                                            <li>{extracurricularAct.scheduleLunes}</li>
                                                            <li>{extracurricularAct.scheduleMartes}</li>
                                                            <li>{extracurricularAct.scheduleMiercoles}</li>
                                                            <li>{extracurricularAct.scheduleJueves}</li>
                                                            <li>{extracurricularAct.scheduleViernes}</li>
                                                            <li>{extracurricularAct.scheduleSabado}</li>
                                                            <li>{extracurricularAct.scheduleDomingo}</li>
                                                        </ul>
                                                    </div>    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                

                                {/* BODY: STUDENT DATA */}
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="mb-4">Datos escolares</h5>
                                        <div className='disposition'>
                                            <div className='list'>
                                                <div className='camp-space'><span className="camp-design">Matrícula</span></div>
                                                <div className='camp-space'><span className="camp-design">Carrera</span></div>   
                                                <div className='camp-space'><span className="camp-design">Cuatrimestre</span></div>
                                                <div className='camp-space'><span className="camp-design">Grupo</span></div>    
                                                <div className='camp-space'><span className="camp-design">Email institucional</span></div>   
                                             
                                            </div>
                                            <div className="list">                                            
                                                <div className='camp-space'><span className='camp-text'>{studentData.studentNumber}</span></div>                                            
                                                <div className='camp-space'><span className='camp-text'>Tecnologías de la informacion</span></div>                                            
                                                <div className='camp-space'><span className='camp-text'>{studentData.semester}</span></div>                                            
                                                <div className='camp-space'><span className='camp-text'>{studentData.group}</span></div>
                                                <div className='camp-space'><span className='camp-text'>{contactData.institutionalEmail}</span></div>                                            
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

export default Profile;
