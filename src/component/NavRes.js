import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux';
import {toggleHandler} from './../actions';


function NavRes() {

    const dispatch = useDispatch();
    const toggle = useSelector(state => state.handleNavRes);

    return (
        <div className={toggle ? "nav-res nav-res-active" : "nav-res"}>
            <ul className="navbar-nav d-flex">
                <li className="nav-item">
                <NavLink to="/" onClick={()=> dispatch(toggleHandler())} className="nav-link active" aria-current="page" >Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/products" onClick={()=> dispatch(toggleHandler())} className="nav-link" >Product</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/about" onClick={()=> dispatch(toggleHandler())} className="nav-link" >About</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/contact" onClick={()=> dispatch(toggleHandler())} className="nav-link" >Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavRes
