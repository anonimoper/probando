import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './app.css'

//static-top
const Navbar = () => {
    const [collapse, setCollapse] = useState("collapse navbar-collapse");
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" onClick={() => { (collapse.indexOf("show") >= 0) ? setCollapse("collapse navbar-collapse") : setCollapse("collapse navbar-collapse show") }} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={collapse} id="navbarNavAltMarkup">
                <div className="navbar-nav mr-auto">
                </div>
                <div className="navbar-nav">
                    <Link to='lost-form' className="nav-item nav-link active" href="#">PERDIDOS <span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to="/">ADOPTA</Link>
                    <Link className="nav-item nav-link" to="/">ENCONTRADOS</Link>
                </div>
                <form className="form-inline">
                    <input className="form-control mr-sm-4" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </div>

        </nav>
    )
}


export default Navbar;