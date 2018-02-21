import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//this is used in conjunction with bootswatch slate, need to replace bootstrap css files to work
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import ParentNav from './nav/nav.jsx';
import Main from './Main.jsx';

export default class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedShip: "Moskva"
    }
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <ParentNav
            selectedShip={this.state.selectedShip}
          />
          <Main
            selectedShip={this.state.selectedShip}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}
