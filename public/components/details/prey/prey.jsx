import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import MenuItem from 'react-bootstrap/lib/MenuItem';

export default class Prey extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      preyList:[
        "Shimakaze",
        "Gearing",
        "Z-52",
        "Khabarovsk",
        "Grozovoi",
        "Yueyang",
        "Hakuryu",
        "Midway"
      ]
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
            <Col md={2}>
              <FormControl
                componentClass="select"
                onChange={this.handleChangeShip}
                value={this.state.selectedShip}
              >
                {
                  this.state.preyList.map((prey, idx) => {
                    return (
                      <option key={idx} value={prey}>{prey}</option>
                    )
                  })
                }
              </FormControl>
            </Col>
            <Col>
              Your Prey's ship's Details
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
