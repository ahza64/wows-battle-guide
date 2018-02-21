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
            <Col xs={6} md={4}>
              Tier X
            </Col>
            <Col xs={6} md={4}>
              <Image src="../../images/PRSC110.png" rounded responsive />
            </Col>
            <Col xsHidden md={4}>
              Some Details
            </Col>
          </Row>

          <Row>
            <Col className="text-center">
              <h1><u>Moskva</u></h1>
            </Col>
          </Row>

          <Row>
            <Col className="text-center">
              "Come schedule your beating"
            </Col>
          </Row>

          <Row>
            <Col className="text-center">
              <DashboardTable/>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} md={8}>
              <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
            </Col>
            <Col xs={6} md={4}>
              <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} md={4}>
              <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
            </Col>
            <Col xs={6} md={4}>
              <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
            </Col>
            <Col xsHidden md={4}>
              <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} xsOffset={6}>
              <code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col md={6} mdPush={6}>
              <code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code>
            </Col>
            <Col md={6} mdPull={6}>
              <code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
