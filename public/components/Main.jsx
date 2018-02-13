//Modules
import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Dashboard from './dashboard/dashboard.jsx';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
        </Switch>
      </main>
    )
  }
}
