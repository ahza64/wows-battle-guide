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
      dashButton: 'dashboard'
    }
  }

  dashNav(page) {
    this.setState({
      dashButton: page
    })
  }

  render () {
    var dashButton = this.state.dashButton;
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <div>World of Warships Battle Guide (interm version 3)</div>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullRight>
            <Link to='/'>
              <Button
                active={(dashButton === 'dashboard')}
                type="button"
                onClick={ () => this.dashNav('dashboard') }
              >
                Dashboard
              </Button>
            </Link>
            <Link to='/details'>
              <Button
                active={(dashButton === 'details')}
                type="button"
                onClick={ () => this.dashNav('details') }
              >
                Details
              </Button>
            </Link>
            <Link to='/information'>
              <Button
                active={(dashButton === 'information')}
                type="button"
                onClick={ () => this.dashNav('information') }
              >
                Information
              </Button>
            </Link>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
})
