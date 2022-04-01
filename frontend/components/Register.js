import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Register() {
    // const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpwd, setConfirmpwd] = useState('');

    async function onRegister(e) {
        e.preventDefault()
        const res = await fetch("http://localhost:5000/users/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name, email, password, confirmpwd
            }),
        })
        const data = await res.json()
        if (data.status === "ok") {
            window.location.href = '/login'
        } else {
            alert('User Already exist')
        }
        
    }

    return (
        <>

            <div className="container mt-5 pt-3">
                <div className="row">
                    <div className="col-12 col-sm-8 col-md-5 m-auto">
                        <div className="icons text-center">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-plus mb-4" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                </svg> */}
                        </div>
                        <div className="card card-body shadow p-3 mb-5 bg-body rounded">
                            <h4 className="text-center mb-4">Sign Up</h4>



                            <form onSubmit={onRegister}>

                                <div className="form-group mb-4">
                                    <input type='text'
                                        name="name"
                                        placeholder="Enter Username"
                                        value={name}
                                        className="form-control"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-4">
                                    <input type='email'
                                        name="email"
                                        placeholder="Enter Email Id"
                                        value={email}
                                        className="form-control"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-4">
                                    <input type='password'
                                        name="password"
                                        placeholder="Enter Password"
                                        value={password}
                                        className="form-control"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-4">
                                    <input type='password'
                                        name="confirmpwd"
                                        placeholder="Enter Confirm Password"
                                        value={confirmpwd}
                                        className="form-control"
                                        onChange={(e) => setConfirmpwd(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-4 text-center">
                                    <button type="submit"
                                        className=" btn btn-primary">
                                        <span>Register me</span>
                                    </button>
                                </div>

                                <div>
                                    <h6> Already Registered? <NavLink to='/Login'>Login</NavLink></h6>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register