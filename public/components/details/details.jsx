import React from 'react';

import ShipDetails from './ship/shipDetails.jsx';
import Prey from './prey/prey.jsx';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';

export default class Details extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Grid>
          <Row>
            <Col>
              <Tabs defaultActiveKey={1} id="details-tabs" bsStyle="pills">
                <Tab eventKey={1} title="Overview">
                  <ShipDetails/>
                </Tab>
                <Tab eventKey={2} title="Prey">
                  <Prey/>
                </Tab>
                <Tab eventKey={3} title="Equal">
                  Selectable List of Equal oponents, plus selected ship details
                </Tab>
                <Tab eventKey={4} title="Predators">
                  Selectable list of Predators to you, plus selected ship details
                </Tab>
                <Tab eventKey={5} title="Captain Build">
                  Your ship's Captain Build
                </Tab>
                <Tab eventKey={6} title="Edit">
                  form to edit your ship
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
