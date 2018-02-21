import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';

export default class ShipDetails extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedShip: "Moskva"
    }

    this.handleChangeShip = this.handleChangeShip.bind(this);
  }

  handleChangeShip(e) {
    this.setState({
      selectedShip: e.target.value
    });
  }

  render () {
    return (
      <div>
        <Grid>
          <Row>
            <Col>
              Your ship in greater detail
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
