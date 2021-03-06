// Modules
import React from 'react';

import { Link, Redirect } from 'react-router-dom';
import {Typeahead} from 'react-bootstrap-typeahead';

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
    console.log(this.props.match);

    this.state = {
      dashButton: 'dashboard',
      selectedShip: "",
      shipList: shipList,
      fireRedirect: false
    }
  }

  componentWillMount() {
    this.setState({
      fireRedirect: false,
    })
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
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <div>World of Warships Battle Guide (version 0.1.0)</div>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <Typeahead
              onChange={(shipEntry) => this.handleChangeShip(shipEntry)}
              options={this.state.shipList}
              placeholder="Select your ship"
              />
          </Navbar.Form>
          <Navbar.Form pullRight>
            <Link to={`/dashboard/${this.state.selectedShip}`}>
              <Button
                active={(dashButton === 'dashboard')}
                type="button"
                onClick={ () => this.dashNav('dashboard') }
              >
                Dashboard
              </Button>
            </Link>
            <Link to={`/details/${this.state.selectedShip}`}>
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
          <Redirect to={`/dashboard/${this.state.selectedShip}`}/>
        )}
      </Navbar>
    )
  }
})
