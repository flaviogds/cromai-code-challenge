import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ErrorPage extends Component{

    constructor(props){
        super(props);
        this.state = {...props.location.state}
    }

    render(){
        return( 
            <>
                <div className="container">
                    <h3 className="badge bg-dark text-warning text-wrap">{this.state.title}</h3>
                    <p className="text-break">{this.state.message}</p>

                    <Link className="btn btn-secondary mt-2" to="/"> Voltar </Link>
                </div>
            </>
        );
    }
}