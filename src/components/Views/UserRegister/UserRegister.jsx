import React from 'react';
import { MdPadding } from 'react-icons/md';
import { Link } from 'react-router-dom';

function userRegister() {
    return (
        <>
        <div className="container ">
                <div className="row">
                    <div className="col-md-12">
            <form>
            <h1 className='title-change-password-disposition title-register-style'>Registrate</h1>
            <h4 className='subtitle-register-style'>Forma parte de actividades extracurriculares que te ofrece la Univercidad Tecnologuica Metropolitana.</h4><br/>
                <div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputAddress">Nombre</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="ej. Juan Antonio"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputAddress2">Apellidos</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="ej. Corpus Flores"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="inputAddress2">Matrícula</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="ej. utm00030600"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputAddress2">Programa de estudios</label>
                            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputAddress2">Cuatrimestre actual</label>
                            <input type="number" class="form-control" id="inputAddress2" placeholder="ej. 6"/>
                        </div>
                    </div>  
                </div>
                <div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="@utma.edu.mx"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Confirma tu email</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="@utma.edu.mx"/>
                        </div>
                    </div>
                    <div  class="form-row align-items-center">
                        <div class="col-auto col-md-2">
                            <button type="submit" class="btn btn-primary btn-style-change-password">Enviar código</button>
                        </div>
                        <div class="col-auto">
                            <label class="sr-only" for="inlineFormInputGroup">Username</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Introduce el código</div>
                                </div>
                                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="ej. 4H6rf7"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="form-group">
                        <label for="inputAddress">Crea una contraseña</label>
                        <input type="password" class="form-control" id="inputAddress" placeholder="Contraseña"/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Introduce nuevamente la contraseña</label>
                        <input type="password" class="form-control" id="inputAddress2" placeholder="Confirmar la contraseña"/>
                    </div> 
                    <div class="form-group">

                        <label className='password-text-recomendation' for="inputAddress">¡Debe contener más de ocho digitos y es recomendable el uso de caracteres especiales para mejorar la seguridad de tu contraseña!</label>
                    </div>   
                </div>
                <button type="submit" class="btn btn-primary btn-style-change-password"><Link to="/" className='text-btn-style-change-password'>Registrarme</Link></button>
              
            </form>

        </div>
    </div>
</div>

        </>
    );
}

export default userRegister;