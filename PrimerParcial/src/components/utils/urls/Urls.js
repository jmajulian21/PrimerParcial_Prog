import React, { Component } from 'react';
import { Route, Switch,Redirect} from 'react-router-dom';

import Lista from '../../persona/lista/ListaPersona';

const Inicio = () => <h1>Trabajo Julian M.</h1>

class Urls extends Component {
  render() {
    return (
            <Switch>
              <Route exact path='/inicio' component={Inicio}/>
              <Route exact path='/personas' component={Lista}/>

              <Redirect to='/inicio'/>
            </Switch>
    );
  }
}

export default Urls;
