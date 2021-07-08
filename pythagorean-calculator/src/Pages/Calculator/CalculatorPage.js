import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Calculator extends Component{

    constructor(props) {
        super(props);

        this.state = {
            arestaA: '',
            arestaB: '',
            arestaC: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        let obj = {};

        obj[event.target.id] = event.target.value

        this.setState({
            ...this.state,
            ...obj
        });
    }

    render(){
        return(
            <>
                <div className="p-2">
                    <div className="card">
                        <div className="badge bg-secondary text-wrap fs-2 d-flex justify-content-center m-2 mt-3">Calculadora Pitagórica</div>
                        
                        <img src="" alt="triangle" className="card-img-top"/>
                        
                        <form className="row w-75 m-auto p-5">
                            <div className="mb-3 m-auto">
                                <label htmlFor="arestaA" className="form-label">Aresta A</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="arestaA" 
                                    aria-describedby="aresta"
                                    value={this.state.arestA}
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="mb-3 m-auto">
                                <label htmlFor="arestaB" className="form-label">Aresta B</label>
                                <input
                                    type="text" 
                                    className="form-control" 
                                    id="arestaB"
                                    value={this.state.arestB} 
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="mb-3 m-auto">
                                <label htmlFor="arestaC" className="form-label">Aresta C</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="arestaC"
                                    value={this.state.arestC} 
                                    onChange={this.handleChange}/>
                            </div>

                            <div className="m-auto mb-3 mt-3 row">
                                <Link
                                    to={{
                                        pathname: "/results",
                                        state: { params: {...this.state} }
                                    }}
                                    className="btn btn-secondary mt-2 mr-1">Calcular</Link>

                                <Link className="btn btn-secondary mt-2" to="/">Voltar</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}