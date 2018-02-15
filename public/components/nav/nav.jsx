// Modules
import React from 'react';

import { Link } from 'react-router-dom';

// Styles
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import Button from 'react-bootstrap/lib/Button';
import muiThemeable from 'material-ui/styles/muiThemeable';

export default muiThemeable()(class ParentNav extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      dashButton: true
    }
  }

  dashNav() {
    if (this.state.dashButton) {
      this.setState({
        dashButton: false
      })
    } else {
      this.setState({
        dashButton: true
      })
    }
  }

  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <div>World of Warships Battle Guide (interm version 2)</div>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullRight>
            <Link to='/'>
              <Button
                disabled={this.state.dashButton}
                active={this.state.dashButton}
                type="button"
                onClick={ () => this.dashNav() }
              >
                Dashboard
              </Button>
            </Link>
            <Link to='/details'>
              <Button
                disabled={!this.state.dashButton}
                active={!this.state.dashButton}
                type="button"
                onClick={ () => this.dashNav() }
              >
                Details
              </Button>
            </Link>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
})
