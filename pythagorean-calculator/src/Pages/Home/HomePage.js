import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component{

    render(){
        return (
            <>
                <div className="container">
                    <div className="card mt-2">
                        <div className="card-body text-center  text-break">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                             It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                             essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                             containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                             PageMaker including versions of Lorem Ipsum.
                        </div>
                        <div className="m-auto mt-4 mb-4">
                            <Link className="btn btn-secondary btn-lg" to="/calculator">Iniciar</Link>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}