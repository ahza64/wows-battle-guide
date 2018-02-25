import React from 'react';
import axios from 'axios';

import DashboardTable from './dashboardTable.jsx';
import ships from '../../sampleData/ships.json';

import Image from 'react-bootstrap/lib/Image';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Dashboard extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedShip: {
        img: "https://glossary-eu-static.gcdn.co/icons/wows/current/vehicle/small/PRSC999.png",
        mainGuns: {
          AP: {
            penValues: {
              km15: 100
            }
          }
        },
        armor: {
          belt: 0
        }
      },
      ships: []
    };
    this.getShips();
  }

  componentWillMount() {
    if (this.props.match.params.ship) {
      var shipParams = this.props.match.params.ship
      var findShip = this.state.ships.find(
        (sh) => {
          if (shipParams == sh.name) {
            return sh
          }
        });
      if (findShip) {
        this.setState({
          selectedShip: findShip
        });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    var shipParams = nextProps.match.params.ship
    var findShip = this.state.ships.find(
      (sh) => {
        if (shipParams == sh.name) {
          return sh
        }
      });
    if (findShip) {
      this.setState({
        selectedShip: findShip
      });
    }
  }

  getShips() {
    var that = this;
    axios
    .get(`/ships`)
    .then(
      function (res) {
        console.log("GOT SHIPS", res.data);
        var ships = res.data;
        that.setState({
          ships: res.data
        });
        if (that.props.match.params.ship) {
          var shipParams = that.props.match.params.ship
          var findShip = that.state.ships.find(
            (sh) => {
              if (shipParams == sh.name) {
                return sh
              }
            });
          if (findShip) {
            that.setState({
              selectedShip: findShip
            });
          }
        }
      }, function (err) {
        console.log(err);
      }
    ).catch((err) => {
      console.error("could not reach ships", err);
    })
  }

  render () {
    return (
      <div>
        <Grid>
          <Row>
            <Col xsHidden md={4}>
              Tier X, captain build, select tier range for match
            </Col>
            <Col xs={6} md={4}>
              <Image
                rounded
                responsive
                src={this.state.selectedShip.img}
              />
            </Col>
            <Col xs={6} md={4}>
              Some Details, youtube video plug for tactics
            </Col>
          </Row>

          <Row>
            <Col className="text-center">
              <h1><u>{this.state.selectedShip.name || "Select A Ship Above"}</u></h1>
            </Col>
          </Row>

          <Row>
            <Col className="text-center">
              {this.state.selectedShip.quip}
            </Col>
          </Row>
          <br/>
          <Row>
            <Col className="text-center">
              <DashboardTable
                match={this.props.match}
                selectedShip={this.state.selectedShip}
                ships={this.state.ships}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
