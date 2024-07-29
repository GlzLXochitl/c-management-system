import React from 'react';
import { Link } from 'react-router-dom';
                       
function newCourse(){
    window.location.href = "/formApply";
}

function goBack(){ 
    window.location.href = "/admin";
}
function AdminDashboard() {


    return (
        <>
        
            <div className='title-style'>
                {/*<h1>Talleres y Deportes</h1>*/}
                <div id='btns-container'>
                    <div>
                        <button id='edit' type="button" class="btn btn-primary btn-design">
                            <img src="images/editar.png" className="card-img-top" alt="..."/>
                            Editar un curso
                        </button>
                    </div>
                    <div>
                    
                    {/*
    
                        import { Link } from 'react-router-dom';
                        <Link to="/formApply"></Link> 
                    
                    */}
                                        <button id='add' onClick={newCourse} onCl type="button" class="btn btn-primary btn-design">
                        <img src="images/add.png" className="card-img-top" alt="..."/>
                        Añadir Curso
                    </button>
                    
                    </div>
                    <div>
                        <button id='delete' type="button" class="btn btn-primary btn-design">
                            <img src="images/restar.png" className="card-img-top" alt="..."/>
                            Eliminar curso
                        </button>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default AdminDashboard;
