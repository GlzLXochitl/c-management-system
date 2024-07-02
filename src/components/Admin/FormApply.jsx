import React from 'react';
import { Link } from 'react-router-dom';

function goBack(){ 
    window.location.href = "/adminDashboard";
}


function FormApply() {
  return (
      <>
      <div id='card-disposition'>
        <div className="card"  style={{ width: '45rem' }} >
                <div class="card-body">
                    <form className='form-container'>
                        <div>
                            <h1 className='title-card'>Añadir Curso</h1>
                        </div>
                        <div className='body-card-design'>
                        <div class="form-group">
                                <label for="quarterSelect">Coordinador</label>
                                <select class="form-control" id="quarterSelect">
                                    <option>Emilio Romo</option>
                                    <option>Carlos Galindo</option>
                                    <option>Xochitl Leos</option>
                                    <option>Erasmo Diaz</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Cuatrimestre</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Enero - Abril</option>
                                    <option>Mayo  - Agosto</option>
                                    <option>Septiembre - Diciembre</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="courseSelect">Actividad</label>
                                <select class="form-control" id="courseSelect">
                                    <option>Futbol</option>
                                    <option>Ajedrez</option>
                                    <option>Literatura</option>
                                    <option>Voley</option>
                                    <option>Baloncesto</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="courseSelect">Creditos al cumplir la actividad</label>
                                <select class="form-control" id="courseSelect">
                                    <option>10</option>
                                    <option>20</option>
                                    <option>30</option>
                                    <option>40</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="courseSelect">Imagen del curso</label>
                                <label for="imgFile">Selecciona la imagen</label>
                                <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                            </div>

                            
                            <div class="form-check form-check-inline checkbox-container">
                                <label for="courseSelect">Horarios</label>
                                <div>
                                    <div className='form-check form-check-inline'>
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Lunes"/>
                                        <label class="form-check-label" for="inlineCheckbox1">Lunes</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Martes"/>
                                        <label class="form-check-label" for="inlineCheckbox2">Martes</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Miercoles"/>
                                        <label class="form-check-label" for="inlineCheckbox2">Miercoles</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Jueves"/>
                                        <label class="form-check-label" for="inlineCheckbox2">Jueves</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Viernes"/>
                                        <label class="form-check-label" for="inlineCheckbox2">Viernes</label>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="firstRadio" id="exampleRadio" value="16:00 - 17:00" checked/>
                                <label class="form-check-label" for="firstRadio">
                                    16:00 - 17:00
                                </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="secondRadio" id="secondRadio" value="17:00 - 18:00"/>
                                <label class="form-check-label" for="secondRadio">
                                    17:00 - 18:00
                                </label>
                            </div>
                            <div className="btn-style-submit">
                                <button id="goBack" onClick={goBack} style={{marginTop: '20px'}} className="btn btn-primary btn-disposition">Aceptar</button>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
      </div>
     
      </>
  );
}

export default FormApply;
