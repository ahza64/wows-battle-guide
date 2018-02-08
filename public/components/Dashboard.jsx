import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//this is used in conjunction with bootswatch slate, need to replace bootstrap css files
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import AppBar from 'material-ui/AppBar';
import ParentNav from './nav/nav.jsx';

class Dashboard extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <ParentNav
          />
          <AppBar title="My AppBar" />
          <div>
            World of Warships Battle Guide Dashboard component
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Dashboard;
