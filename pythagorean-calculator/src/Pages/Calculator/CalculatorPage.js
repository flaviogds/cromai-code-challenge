import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Calculator extends Component{

    constructor(props) {
        super(props);

        this.state = {};

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
                                <label htmlFor="adjacent_leg" className="form-label">Cateto Adjacente</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="adjacent_leg" 
                                    value={this.state.adjacent_leg}
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="mb-3 m-auto">
                                <label htmlFor="opposite_leg" className="form-label">Cateto Oposto</label>
                                <input
                                    type="text" 
                                    className="form-control" 
                                    id="opposite_leg"
                                    value={this.state.opposite_leg} 
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="mb-3 m-auto">
                                <label htmlFor="hypotenuse" className="form-label">Hipotenusa</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="hypotenuse"
                                    value={this.state.hypotenuse} 
                                    onChange={this.handleChange}/>
                            </div>

                            <div className="mb-3 m-auto">
                                <label htmlFor="unit" className="form-label">Unidade</label>
                                <input 
                                    type="text" 
                                    list="units"
                                    className="form-control" 
                                    id="unit"
                                    onChange={this.handleChange}/>

                                <datalist id="units">
                                    <option value="m"/>
                                    <option value="cm"/>
                                </datalist>
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