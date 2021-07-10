import React, { Component } from 'react';
import './style.scss';

export default class Navbrand extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand">
                        <img 
                            src="%PUBLIC_URL%/pitagoras.png" 
                            alt="logo" 
                            className="image d-inline-block align-text-top"/>
                    </span>
                </div>
            </nav>
        );
    }
};