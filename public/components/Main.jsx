//Modules
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ParentNav from './nav/nav.jsx';
import Dashboard from './dashboard/dashboard.jsx';
import Details from './details/details.jsx';
import Information from './info/info.jsx';

export default class Main extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedShip: ""
    }
  }

  render() {
    return (
      <div>
        <main>
          <Route path='/' component={ParentNav}/>
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/:ship' component={Dashboard}/>
            <Route exact path='/details' component={Details}/>
            <Route exact path='/details/:ship' component={Details}/>
            <Route exact path='/information' component={Information}/>
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    )
  }
}
