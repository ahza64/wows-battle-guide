// Modules
import React from 'react';

import { Link } from 'react-router-dom';

// Styles
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import Button from 'react-bootstrap/lib/Button';
import muiThemeable from 'material-ui/styles/muiThemeable';

export default muiThemeable()(class ParentNav extends React.Component {

  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <div>World of Warships Battle Guide (interm version 1)</div>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullRight>
            <Link to='/details'>
              <Button
                type="button"
                onClick={ console.log("details clicked") }
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
