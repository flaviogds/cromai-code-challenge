import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component{
    // Componente de Visualização da pagina Home
    // Alocado na rota "/"
    // Link de redirecionamento para rota "/calculator"

    render(){
        return (
            <>
                <div className="container">
                    <div className="card mt-2">
                        <div className="card-body text-center  text-break">

                            <h2 className="text-center mt-2 mb-2">Hey, Pitagoras?</h2>

                            <p className="text-wrap text-break">
                                Todo mundo em algum momento, provavelmente na escola,
                                 já se deparou com as relações métricas de um triângulo retângulo.
                            </p>
                            <p className="text-wrap text-break">
                                E mesmo que você não tenha percebido, essas relações nos cercam constantemente,
                                escondidas na forma como um GPS calcula a melhor rota, ou até mesmo na forma como você
                                 escolhe o caminho nos corredores de um supermercado.
                            </p>
                            <p className="text-wrap text-break">
                                Se você não se lembra, relaxe, estamos aqui para ajudar.
                                Que tal uma calculadora?
                            </p>

                            <h6>
                                Se ainda tiver dúvidas ou quiser saber mais, da uma olhada neste link aqui 
                                 <a href="http://www.ime.unicamp.br/~apmat/teorema-de-pitagoras/" target="blank">Teorema de Pitágoras</a>
                            </h6>
                        </div>
                        <div className="m-auto mt-4 mb-4">
                            <Link className="btn btn-warning btn-lg" to="/calculator">Iniciar</Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}