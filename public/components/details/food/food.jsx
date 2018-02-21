import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import MenuItem from 'react-bootstrap/lib/MenuItem';

export default class Food extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      foodList:[
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
                  this.state.foodList.map((food, idx) => {
                    return (
                      <option key={idx} value={food}>{food}</option>
                    )
                  })
                }
              </FormControl>
            </Col>
            <Col>
              Your enemy's ship Details
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
