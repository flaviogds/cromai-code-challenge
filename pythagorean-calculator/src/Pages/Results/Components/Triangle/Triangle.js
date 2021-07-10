import React, { Component } from 'react'

import './syle.scss'

export default class Triangle extends Component{
    // Componente de visualização de resultado, se positivo, da requisição

    render(){
        return (
            <>
                <div className="card d-flex flex-row">
                    <div className="text-wrap text-break fs-4 d-flex justify-content-center">
                        {!this.props.value.retangle
                            ? <p className="badge bg-primary text-wrap text-break pt-5">Ops, os valores não correspondem as arestas de um triangulo retangulo</p>
                            : null
                        }
                    </div>

                    <div className="card-body text-center">
                        <div className="container">
                            <div className="row g-2">
                                <div className="col-6">
                                    <div className="p-3 border bg-light">{this.props.value.retangle ? "Cateto Adjacente" : "Aresta A"}:</div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border bg-light">{this.props.value.edges.adjacent_leg} {this.props.value.unit}</div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border bg-light">{this.props.value.retangle ? "Cateto Oposto" : "Aresta B"}:</div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border bg-light">{this.props.value.edges.opposite_leg} {this.props.value.unit}</div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border bg-light">{this.props.value.retangle ? "Hipotenusa" : "Aresta C"}:</div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border bg-light">{this.props.value.edges.hypotenuse} {this.props.value.unit}</div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border bg-light">Perimetro:</div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border bg-light">{this.props.value.perimeter} {this.props.value.unit}</div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border bg-light">Área:</div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border bg-light">{this.props.value.area} {this.props.value.unit}²</div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border bg-light">Ângulos Internos:</div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border bg-light">
                                        a = {this.props.value.innerAngles.a}°
                                        <br/>
                                        b = {this.props.value.innerAngles.b}°
                                        <br/>
                                        c = {this.props.value.innerAngles.c}°
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}