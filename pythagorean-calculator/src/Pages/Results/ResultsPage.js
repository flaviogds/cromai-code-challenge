import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Loading from '../../Components/Loading/Loading'
import Triangle from './Components/Triangle/Triangle';

export default class ResultsPage extends Component{
  //Componente de carregamento da pagina de resultados
  //Gerencia o estado interno do compomente
  //Recebe como props os parametros das aresta emitidos pelo
  //formulario do componente Calulator e realiza a requisição para o endpoint "/calculator" da api
  //Apos o retorno da requisição carrega o componente apropriado
  // Componente de Loading/Spinner
  // Componente de Erro na requisição
  // Componente de Erro para o tipo de objeto de retorno
  // Componente de visualização do objeto de retorno, componente de visualização Triangle

    constructor(props) {
        super(props);
        this.state = {
          error: false,
          isLoaded: false,
          result: {},
          params: {...props.location.state.params}
        };
      }

    componentDidMount() {
        fetch("http://localhost:5000/calculator", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.state.params)
        })
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                result: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render(){
        return(
            <>
              {
              
                !this.state.isLoaded ? <Loading/>
                  : this.state.error ? <Redirect to={{ pathname: "/error", state: { title: "Ops! algo inesperado aconteceu.", message: "Tente novamente" }}}/>
                    : this.state.result["triangle"] ? <Triangle value={this.state.result}/>
                      : <Redirect to={{ pathname: "/error", state: {...this.state.result}}}/>
              }
              <div className="text-center">
                <Link className="btn btn-warning text-center mt-5" to="/calculator">Voltar</Link>
              </div>
            </>
        );
    }
}