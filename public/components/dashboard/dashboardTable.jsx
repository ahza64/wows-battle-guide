import React from 'react';

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
        <Table>
          <thead>
            <tr>
              <th>Food</th>
              <th>Them's fightin words</th>
              <th>Your Death</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ListGroup>
                  <ListGroupItem>Shimakaze</ListGroupItem>
                  <ListGroupItem>Gearing</ListGroupItem>
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
                  <ListGroupItem>Zao</ListGroupItem>
                  <ListGroupItem>Des Moines</ListGroupItem>
                  <ListGroupItem>Hindenburg</ListGroupItem>
                  <ListGroupItem>Moskva</ListGroupItem>
                  <ListGroupItem>Minotaur</ListGroupItem>
                  <ListGroupItem>Henri IV</ListGroupItem>
                </ListGroup>
              </td>
              <td>
                <ListGroup>
                  <ListGroupItem>Yamato</ListGroupItem>
                  <ListGroupItem>Montana</ListGroupItem>
                  <ListGroupItem>Großer Kurfurst</ListGroupItem>
                  <ListGroupItem>Conqueror</ListGroupItem>
                  <ListGroupItem>France</ListGroupItem>
                </ListGroup>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}
