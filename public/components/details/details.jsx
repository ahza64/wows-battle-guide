import React from 'react';

import ShipDetails from './ship/shipDetails.jsx';
import Food from './food/food.jsx';

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
                <Tab eventKey={2} title="Food">
                  <Food/>
                </Tab>
                <Tab eventKey={3} title="Them's fightin words">
                  fightin list, plus selected ship details
                </Tab>
                <Tab eventKey={4} title="Sharks">
                  sharks list, plus selected ship details
                </Tab>
                <Tab eventKey={5} title="Captain Build">
                  Your ship's Captain Build
                </Tab>
                <Tab eventKey={6} title="Edit">
                  form to edit moskva
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
