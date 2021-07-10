import React, { Component } from 'react'
import './style.scss'

export default class Loading extends Component{
    render(){
        return (
            <>
                <div className="d-flex justify-content-center mt-5">
                    <div className="spinner-border text-warning size" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </>
        );
    }
}