import React from "react";
import ReactDOM from 'react-dom';


export const Navbar = (props) => {

    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark ">
            <div class="container">
            <a className="navbar-brand" href="#">Start bootstrap</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link " href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>


    );
};