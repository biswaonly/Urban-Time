import { Route, withRouter } from 'react-router-dom';
import { Switch } from 'react-router';
import React, { Component } from 'react';
import MainRoute from '../components/mainRoute/MainRoute';

class AppRoute extends Component {
  render(){
    return(
      <Switch>
        <Route path='/' component={MainRoute}/>
      </Switch>
    )
  }
}

export default withRouter(AppRoute);