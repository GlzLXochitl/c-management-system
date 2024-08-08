import React from 'react';
import { MdPadding } from 'react-icons/md';
import { Link } from 'react-router-dom';

//import '../../styles/views/common/changePassword.css';

function changePassword() {
    return (
        <>
            {/*<div className="container container-change-password">
                <div className="row">
                    <div className="col-md-12">
                        <div className="changepassword">
                            <h1>Cambia tu contraseña</h1>
                            <form className='password-from-dispocition'>
                                <div className="form-group">
                                    <label className='password-input-name' htmlFor="email">Email</label>
                                    <input type="password" className="form-control" id="email" placeholder="@utma.edu.mx" />
                                    <button type="submit">Enviar codigo</button>
                                </div>
                                <div className="form-group">
                                    <label className='password-input-name' htmlFor="oldpassword">Old Password</label>
                                    <input type="password" className="form-control" id="oldpassword" placeholder="Old Password" />
                                </div>
                                <div className="form-group">
                                    <label className='password-input-name'htmlFor="newpassword">New Password</label>
                                    <input type="password" className="form-control" id="newpassword" placeholder="New Password" />
                                </div>
                                <div className="form-group">
                                    <label className='password-input-name'htmlFor="confirmpassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm Password" />
                                </div>
                                <button type="submit" className="btn btn-primary btn-password-design">Change Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>*/}
        <div className="container container-change-password">
                <div className="row">
                    <div className="col-md-12">
            <form>
            <h1 className='title-change-password-disposition'>Cambia tu contraseña</h1><br></br>
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
                        <div class="col-auto">
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
                        <label for="inputAddress">Nueva contraseña</label>
                        <input type="password" class="form-control" id="inputAddress" placeholder="Contraseña"/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Introduce nuevamente la contraseña nueva</label>
                        <input type="password" class="form-control" id="inputAddress2" placeholder="Confirmar la contraseña"/>
                    </div>
                    
                    
                </div>
                <button type="submit" class="btn btn-primary btn-style-change-password">Confirmar</button>
                {/*
                    este boton te va a mandar a login si no habia una secion previamente iniciada
                    y si es que estaba iniciada te va a retornar al dash del unuario correspondiente
                */}
            </form>

</div></div> </div>

        </>
    );
}

export default changePassword;