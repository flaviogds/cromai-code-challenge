import React, { Component } from 'react';

export default class ResultsPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          result: false
        };

      }

    /*console.log(props.location.state.params) */

    componentDidMount() {
        fetch("http://localhost:3000/response")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                result: result.teste
              });
            },
            // Nota: É importante lidar com os erros aqui
            // em vez de um bloco catch() para não recebermos
            // exceções de erros dos componentes.
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
                <div className="card">
                    <img src="" alt="" className="card-img-top"/>
                    <div className="card-body text-center">
                        <p>Cateto Adjacente</p>
                        <p>Cateto Oposto</p>
                        <p>Hipotenusa</p>

                        <p>Angulo AB</p>
                        <p>Angulo AC</p>
                        <p>Angulo BC</p>

                    </div>
                    <div className="card-footer">
                    </div>
                </div>
            </>
        );
    }
}