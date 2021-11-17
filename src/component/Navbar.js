import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux';
import {toggleHandler} from './../actions'



function Navbar() {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.handleCart);
 

    return (
        <div className="container-navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink to="/" className="navbar-brand fw-bold fs-4">FAKE SHOP</NavLink>
                    <button onClick={() => dispatch(toggleHandler())} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink to="/" className="nav-link active fs-5 fw-bold" aria-current="page" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/products" className="nav-link fs-5 fw-bold" >Product</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/about" className="nav-link fs-5 fw-bold" >About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/contact" className="nav-link fs-5 fw-bold" >Contact</NavLink>
                        </li>
                    </ul>
                    <div className="button">
                        <NavLink to="/login" className="btn btn-outline-dark me-1">
                            <i className="fa fa-sign-in me-1"></i> Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark me-1">
                            <i className="fa fa-user-plus me-1 ms-2"></i> Register</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark">
                            <i className="fa fa-shopping-cart me-1 ms-2"></i> Cart ({cart.length})</NavLink>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
