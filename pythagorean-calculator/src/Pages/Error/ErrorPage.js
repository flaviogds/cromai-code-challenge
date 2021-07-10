import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ErrorPage extends Component{
    //Componente de vizualização de Erro
    //Recebe como props os parametros, title e message

    constructor(props){
        super(props);
        this.state = {...props.location.state}
    }

    render(){
        return( 
            <>
                <div className="container">
                    <p className="badge bg-dark text-warning text-wrap fs-2 d-flex justify-content-center m-2 mt-3">{this.state.title}</p>
                    <p className="text-center text-break mt-5 mb-5">{this.state.message}</p>

                    <div className="text-center mt-5">
                        <Link className="btn btn-warning mt-2" to="/"> Voltar </Link>
                    </div>
                </div>
            </>
        );
    }
}