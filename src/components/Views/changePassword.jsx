import React from 'react';

function changePassword() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="changepassword">
                            <h1>Change Password</h1>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="oldpassword">Old Password</label>
                                    <input type="password" className="form-control" id="oldpassword" placeholder="Old Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="newpassword">New Password</label>
                                    <input type="password" className="form-control" id="newpassword" placeholder="New Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmpassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm Password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Change Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default changePassword;