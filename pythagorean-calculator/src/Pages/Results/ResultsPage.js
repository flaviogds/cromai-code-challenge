import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Loading from '../../Components/Loading/Loading'
import Triangle from './Components/Triangle/Triangle';

export default class ResultsPage extends Component{

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
      console.log(this.state.result)
        return(
            <>
              { !this.state.isLoaded
                ? <Loading/>
                : this.state.error
                  ? <Redirect 
                        to={{
                        pathname: "/error",
                        state: {
                          title: "Ops! algo inesperado aconteceu.",
                          message: ""
                        }
                      }}/>
                  : !this.state.result.triangle
                      ? <Triangle value={this.state.result}/>
                      : <Redirect 
                          to={{
                          pathname: "/error",
                          state: {...this.state.result}
                        }}/>
              }
            </>
        );
    }
}