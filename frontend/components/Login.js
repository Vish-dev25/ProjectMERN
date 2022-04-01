import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const initialValues = { email: '', password: '' };
    // const [formValues, setFormValues] = useState(initialValues);  //bind input fields with formvalues
    // const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);

	async function onSubmit(e) {
		e.preventDefault()

		const res = await fetch('http://localhost:5000/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email, password
			}),
		})

        const data = await res.json()
        console.log(data)
        if (data.status === "ok") {
            window.location.href = '/card'
        } 
	}
    // [formErrors]);

    // const validate = (values) => {
    //     const errors = {};
    //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    //     if (!values.email) {
    //         errors.email = "Email is required!";
    //     } else if (!regex.test(values.email)) {
    //         errors.email = "This is not a valid email format!";
    //     }
    //     if (!values.password) {
    //         errors.password = "Password is required";
    //     } else if (values.password.length < 4) {
    //         errors.password = "Password must be more than 4 characters";
    //     } else if (values.password.length > 15) {
    //         errors.password = "Password cannot exceed more than 15 characters";
    //     }
    //     return errors;
    // };

    return (
        <>

            <div className="container mt-5 pt-3">
                {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="alert alert-success">Signed in successfully</div>
                ) : (
                    <pre>{JSON.stringify(formValues)}</pre>
                )} */}
                <div className="row">
                    <div className="col-12 col-sm-8 col-md-5 m-auto">
                        <div className="icons text-center">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle  mb-4 " viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg> */}
                        </div>
                        <div className="card card-body shadow p-3 mb-5 bg-body rounded">
                            <h4 className="text-center mb-4">Login</h4>

                            <form onSubmit={onSubmit}>

                                <div className="form-group mb-4">
                                    <input type='email'
                                        name="email"
                                        placeholder="Enter Email Id"
                                        value={email}
                                        className="form-control"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                {/* <p className='text-danger'>{formErrors.email}</p> */}
                                <div className="form-group mb-4">
                                    <input type='password'
                                        name="password"
                                        placeholder="Enter Password"
                                        value={password}
                                        className="form-control"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                {/* <p className='text-danger'>{formErrors.password}</p> */}
                                <div className="form-group text-center  mb-4">
                                    <button type="submit" value="Login" className=" btn btn-primary"> <span>Log in</span> </button>
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
export default Login