import React from 'react';

import ships from '../../sampleData/ships.json';

import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import Table from 'react-bootstrap/lib/Table';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

export default class DashboardTable extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedShip: {mainGuns: {AP: {penValues: {km15: ""}}}}
    }
  }

  componentWillReceiveProps(nextProps) {
    var shipParams = nextProps.match.params.ship
    var findShip = ships.ships.find(
      (sh) => {
        if (shipParams == sh.name) {
          return sh
        }
      });

    this.setState({
      selectedShip: findShip
    });
  }

  findAngle(EnemyShip){
    var armor = EnemyShip.armor.belt;
    var penVal = this.state.selectedShip.mainGuns.AP.penValues.km15;
    return ((Math.acos(armor/penVal))/(Math.PI / 180)).toFixed(1)
  }

  render () {
    return (
      <div>
        <Panel bsStyle="primary">
          <Panel.Heading>
            <Panel.Title componentClass="h3">The Bad Boys You'll be Fighting</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Table>
              <thead>
                <tr>
                  <th className="text-center">Prey</th>
                  <th className="text-center">Equal</th>
                  <th className="text-center">Predator</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ListGroup>
                      <ListGroupItem>-angles they pen you-Shimakaze-angles you pen them-</ListGroupItem>
                      <ListGroupItem>-a note about why in catagory-Gearing</ListGroupItem>
                      <ListGroupItem>-color cordinate for HE/IFHE pen bow/deck-Z-52</ListGroupItem>
                      <ListGroupItem>Khabarovsk</ListGroupItem>
                      <ListGroupItem>Grozovoi</ListGroupItem>
                      <ListGroupItem>Yueyang</ListGroupItem>
                      <ListGroupItem>Hakuryu</ListGroupItem>
                      <ListGroupItem>Midway</ListGroupItem>
                    </ListGroup>
                  </td>
                  <td>
                    <ListGroup>
                      {
                        ships.ships.map((EnemyShip, idx) => {
                          return (
                            <ListGroupItem key={idx}>15km:{this.findAngle(EnemyShip)}˚-{EnemyShip.name}</ListGroupItem>
                          )
                        })
                      }
                    </ListGroup>
                  </td>
                  <td>
                    <ListGroup>
                      <ListGroupItem>-make selectable to remove matched ships-Yamato</ListGroupItem>
                      <ListGroupItem>Montana</ListGroupItem>
                      <ListGroupItem>Großer Kurfurst</ListGroupItem>
                      <ListGroupItem>Conqueror</ListGroupItem>
                      <ListGroupItem>France</ListGroupItem>
                    </ListGroup>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Panel.Body>
        </Panel>
      </div>
    )
  }
}
