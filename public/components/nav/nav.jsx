// Modules
import React from 'react';

// Styles
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';

export default class ParentNav extends React.Component {
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <div>World of Warships Battle Guide</div>
          </Navbar.Brand>

        </Navbar.Header>
        <Navbar.Collapse>

        </Navbar.Collapse>
      </Navbar>
    )
  }
}
