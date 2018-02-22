// Modules
import React from 'react';

import { Link, Redirect } from 'react-router-dom';
import Autosuggest from 'react-bootstrap-autosuggest';

import { shipList } from '../../sampleData/shipList.json';

// Styles
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import Button from 'react-bootstrap/lib/Button';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import FormControl from 'react-bootstrap/lib/FormControl';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import muiThemeable from 'material-ui/styles/muiThemeable';

export default muiThemeable()(class ParentNav extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      dashButton: 'dashboard',
      selectedShip: "",
      shipList: shipList,
      fireRedirect: false
    }
  }

  dashNav(page) {
    this.setState({
      dashButton: page
    })
  }

  handleChangeShip(shipEntry) {
    var foundShip = this.state.shipList.find(
      (ship) => {
        if (shipEntry == ship) {
          return shipEntry
        }
      });

    if (foundShip) {
      this.setState({
        selectedShip: foundShip,
        fireRedirect: true
      });
    }
  }

  render () {
    var dashButton = this.state.dashButton;
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <div>World of Warships Battle Guide (version 0.0.5)</div>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <Autosuggest
              datalist={this.state.shipList}
              placeholder="Select your ship"
              value={this.state.selectedShip}
              onChange={(shipEntry) => this.handleChangeShip(shipEntry)}
            />
          </Navbar.Form>
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
        {this.state.fireRedirect && (
          <Redirect to={`/${this.state.selectedShip}`}/>
        )}
      </Navbar>
    )
  }
})
