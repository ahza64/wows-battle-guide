//Routing everything out
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
        {/*
          Switch acts as a template fill area for the navbar component. This allows
          the navbar to be a seperate component, while allowing different routes
          for different fills. The Redirect is necessary, because the dynamic
          routing and asynchronous component rendering, requires the synchronous
          blocking of HTML to allow time for everything to build, before trying
          fill it.
        */}
        <main style={{marginTop: "50px"}}>
          <Route path='/' component={ParentNav}/>
          <Switch>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/dashboard/:ship' component={Dashboard}/>
            <Route exact path='/details' component={Details}/>
            <Route exact path='/details/:ship' component={Details}/>
            <Route exact path='/information' component={Information}/>
            <Redirect to="/dashboard" />
          </Switch>
        </main>
      </div>
    )
  }
}
