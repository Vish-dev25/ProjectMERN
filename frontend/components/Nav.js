import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {NavLink} from 'react-router-dom';
const Nav = () => {
    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid navbar">
                    <NavLink className="navbar-brand" to=""><b>MyResto</b></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/menu">Menu</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">Register</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Nav