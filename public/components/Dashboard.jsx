import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ParentNav from './nav/nav.jsx';

class Dashboard extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <ParentNav
          />
          <div>
            World of Warships Battle Guide Dashboard component
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Dashboard;
