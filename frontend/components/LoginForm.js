import React, { Component } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = { Users: [] };

    }
    handleInputs = (e) => {
        let { name, value } = e.target;
        let { Users } = this.state;
        this.setState({ Users: { ...Users, [name]: value } });
    }

    render() {
        return (
            <>

                <div className="container mt-5 pt-3">
                    <div className="row">
                        <div className="col-12 col-sm-8 col-md-5 m-auto">
                            <div className="icons text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle  mb-4 " viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                            </div>
                            <div className="card card-body shadow p-3 mb-5 bg-body rounded">
                                <h4 className="text-center mb-4">Login</h4>
                                <form onSubmit={this.handleSubmit}>

                                    <div className="form-group mb-4">
                                        <input type='email' name="email" placeholder="Enter Email Id" value={this.state.email} className="form-control" />
                                    </div>

                                    <div className="form-group  mb-4">
                                        <input type='password' name="password" placeholder="Enter Password" value={this.state.password} className="form-control" />
                                    </div><br />

                                    <div className="form-group text-center  mb-4">
                                        <button type="submit" className=" btn btn-primary"> <span>Log in</span> </button>
                                    </div>
                                    <div >
                                        <h6>Not Registered? <NavLink to='/Register'>Create account.</NavLink> </h6>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}


export default LoginForm
