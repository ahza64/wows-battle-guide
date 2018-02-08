// Modules
import React from 'react';

// Styles
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import Button from 'react-bootstrap/lib/Button';
import muiThemeable from 'material-ui/styles/muiThemeable';

class ParentNav extends React.Component {

  handleSubmitLogin(event) {
    console.log("you clicked a button that does nothing");
  }

  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <div>World of Warships Battle Guide (interm version 0)</div>
          </Navbar.Brand>

        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullRight>
            <Button type="submit" onClick={event => this.handleSubmitLogin(event)}>Doesn't do anything yet</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default muiThemeable()(ParentNav);
