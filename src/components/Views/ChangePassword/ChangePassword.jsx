import React from 'react';
import { MdPadding } from 'react-icons/md';

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
            <h1>Cambia tu contraseña</h1><br></br>
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
                    <div>
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                </div>
                <div>
                    <div class="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity"/>
                        </div>
                        <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                        </div>
                        <div class="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck"/>
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                        </div>
                    </div>
                </div>
                
                
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>

</div></div> </div>

        </>
    );
}

export default changePassword;