import React, { Component } from 'react';

export default class ErrorPage extends Component{
    render(){
        return(
            <>
                <div className="container">
                    <h3 className="badge bg-dark text-warning text-wrap">{this.props.title}</h3>
                    <p className="text-break">{this.props.message}</p>
                </div>
            </>
        );
    }
}