import React from 'react';

import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import Table from 'react-bootstrap/lib/Table';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

export default class DashboardTable extends React.Component {
  constructor (props) {
    super(props);
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
                      <ListGroupItem>Z-52</ListGroupItem>
                      <ListGroupItem>Khabarovsk</ListGroupItem>
                      <ListGroupItem>Grozovoi</ListGroupItem>
                      <ListGroupItem>Yueyang</ListGroupItem>
                      <ListGroupItem>Hakuryu</ListGroupItem>
                      <ListGroupItem>Midway</ListGroupItem>
                    </ListGroup>
                  </td>
                  <td>
                    <ListGroup>
                      <ListGroupItem>-color cordinate for HE/IFHE pen bow/deck-Zao</ListGroupItem>
                      <ListGroupItem>Des Moines</ListGroupItem>
                      <ListGroupItem>Hindenburg</ListGroupItem>
                      <ListGroupItem>Moskva</ListGroupItem>
                      <ListGroupItem>Minotaur</ListGroupItem>
                      <ListGroupItem>Henri IV</ListGroupItem>
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
