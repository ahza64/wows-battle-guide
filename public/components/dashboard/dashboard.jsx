import React from 'react';

import DashboardTable from './dashboardTable.jsx';

import Image from 'react-bootstrap/lib/Image';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Dashboard extends React.Component {
  constructor (props) {
    super(props);
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
              <Image src="../../images/PRSC110.png" rounded responsive />
            </Col>
            <Col xs={6} md={4}>
              Some Details, youtube video plug for tactics
            </Col>
          </Row>

          <Row>
            <Col className="text-center">
              <h1><u>{this.props.match.params.ship || "Select A Ship Above"}</u></h1>
            </Col>
          </Row>

          <Row>
            <Col className="text-center">
              "Come schedule your beating"
            </Col>
          </Row>
          <br/>
          <Row>
            <Col className="text-center">
              <DashboardTable match={this.props.match}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
