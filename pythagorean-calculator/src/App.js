import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbrand from './Components/Navbrand/Navbrand';
import Footer from './Components/Footer/Footer'

import HomePage from './Pages/Home/HomePage';
import Calculator from './Pages/Calculator/CalculatorPage';
import ResultsPage from './Pages/Results/ResultsPage';
import ErrorPage from './Pages/Error/ErrorPage';

function App() {

  return (
    <>
      <Navbrand/>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/calculator" exact={true} component={Calculator} />
            <Route path="/results" exact={true} render={(props) => <ResultsPage {...props}/>} />
            <Route path="/error" exact={true} render={(props) => <ErrorPage {...props}/>}  />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;