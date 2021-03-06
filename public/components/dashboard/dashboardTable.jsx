import React from 'react';

import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import Table from 'react-bootstrap/lib/Table';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Button from 'react-bootstrap/lib/Button';

export default class DashboardTable extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedShip: this.props.selectedShip,
      ships: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ships: nextProps.ships
    })
    var shipParams = nextProps.match.params.ship
    var findShip = nextProps.ships.find(
      (sh) => {
        if (shipParams == sh.name) {
          return sh
        }
      });

    if (findShip) {
      this.setState({
        selectedShip: findShip,
        ships: nextProps.ships
      });
    }
  }

  findAttackAngle(EnemyShip, range){
    var resObj = {angle: 0, color: 'black'}
    var kmRange = `km${range}`
    var armor = EnemyShip.armor.belt;
    var penVal = this.state.selectedShip.mainGuns.AP.penValues[kmRange];
    var angle = (90-(Math.acos(armor/penVal))/(Math.PI / 180)).toFixed(1);
    if (angle == "NaN") {
      resObj.angle = 0;
      return resObj
    }else{
      resObj.angle = angle;
      if (resObj.angle >= 45) {
        resObj.color = "red";
        return resObj;
      }else if (resObj.angle >= 30) {
        resObj.color = "yellow";
        return resObj;
      }else if (resObj.angle < 30){
        resObj.color = "green";
        return resObj;
      }
      return resObj
    }
  }

  findDefendAngle(EnemyShip, range) {
    var resObj = {angle: 0, color: 'black'}
    var kmRange = `km${range}`
    var armor = this.state.selectedShip.armor.belt;
    var penVal = EnemyShip.mainGuns.AP.penValues[kmRange];
    var angle = (90-(Math.acos(armor/penVal))/(Math.PI / 180)).toFixed(1);
    if (angle == "NaN") {
      resObj.angle = 0;
      return resObj
    }else{
      resObj.angle = angle;
      if (resObj.angle >= 45) {
        resObj.color = "green";
        return resObj;
      }else if (resObj.angle >= 30) {
        resObj.color = "yellow";
        return resObj;
      }else if (resObj.angle < 30){
        resObj.color = "red";
        return resObj;
      }
      return resObj
    }
  }

  getDefColor(EnemyShip) {
    var ship = this.state.selectedShip;
    var hePen = EnemyShip.mainGuns.cal/6;
    if ((hePen > ship.armor.belt) && (EnemyShip.armor.layered == false)) {
      return 'red'
    }else if (hePen > ship.armor.structure) {
      if (hePen > ship.armor.bow) {
        if ((hePen > ship.armor.deck) && (hePen > ship.armor.upperHull)) {
          return 'orange'
        }
        return 'yellow'
      }
      return 'white'
    }else{
      return 'black'
    }
  }

  getColor(EnemyShip) {
    var hePen = this.state.selectedShip.mainGuns.cal/6;
    if ((hePen > EnemyShip.armor.belt) && (EnemyShip.armor.layered == false)) {
      return 'purple'
    }else if (hePen > EnemyShip.armor.structure) {
      if (hePen > EnemyShip.armor.bow) {
        if (hePen > EnemyShip.armor.deck) {
          if (hePen > EnemyShip.armor.upperHull) {
            return 'red'
          }
          return 'orange'
        }
        return 'yellow'
      }
      return 'white'
    }else{
      return 'black'
    }
  }

  overmatchColor(EnemyShip, direction) {
    var yourOM = this.state.selectedShip.mainGuns.cal/14.3;
    var enemyOM = EnemyShip.mainGuns.cal/14.3;
    if (direction === 'a') {
      if (yourOM > EnemyShip.armor.bow) {
        return "red"
      }
      return "white"
    }else if (direction === 'd') {
      if (enemyOM > this.state.selectedShip.armor.bow) {
        return "red"
      }
      return "white"
    }
  }

  render () {
    const color = 'blue';
    const popoverHoverFocus = (
  <Popover id="popover-trigger-focus" title="What do the numbers and colors mean?">
      NUMBERS: Represent the angle main battery AP can penetrate belt armor to
      and from that opponent at ranges: 5km, 10km, 15km and maxkm.
      <br/>
      NAME/TIER COLORS: Represent how much of a ship can be pen by HE. (name:to,
      tier:from): black:nothing, white:super, yellow:+bow, orange:+deck,
      red:+upper hull, purple:can cit, for both attacking and defending.
      <br/>
      OVERMATCH BOW: are visible by the color both to and from:
      red:can, white:cannot
  </Popover>
);
    return (
      <div>
        <Panel bsStyle="primary">
          <Panel.Heading>
            <OverlayTrigger
              trigger='focus'
              placement="bottom"
              overlay={popoverHoverFocus}
            >
              <Panel.Title componentClass="h3">
                <Button>
                The Bad Boys You'll be Fighting
              </Button>
              </Panel.Title>
            </OverlayTrigger>
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
                      {
                        this.state.ships.map((EnemyShip, idx) => {
                          if (EnemyShip.class === ("DD" || "CV")) {
                            return (
                              <ListGroupItem
                                key={idx}
                                header={
                                  <h3>
                                    <OverlayTrigger
                                      placement="left"
                                      overlay={
                                        <Tooltip id="tooltip">
                                          can you HE pen?<br/>black:nothing,<br/>white:super,<br/>yellow:+bow,<br/>orange:+deck,
                                          <br/>red:+upper hull,<br/>purple:can cit
                                        </Tooltip>
                                    }>
                                      <u style={{color: this.getColor(EnemyShip)}}>
                                        {EnemyShip.name}
                                      </u>
                                    </OverlayTrigger>{'  '}
                                    <OverlayTrigger
                                      placement="right"
                                      overlay={
                                        <Tooltip id="tooltip">
                                          can enemy HE pen?<br/>black:nothing,<br/>white:super,<br/>yellow:super/bow, orange:super/bow/deck/upper,
                                          red:can cit
                                        </Tooltip>
                                    }>
                                      <u style={{color: this.getDefColor(EnemyShip)}}>
                                        {EnemyShip.tier}
                                      </u>
                                    </OverlayTrigger>
                                  </h3>
                                }>
                                <OverlayTrigger
                                  placement="left"
                                  overlay={
                                    <Tooltip id="tooltip">
                                      you overmatch enemy bow?<br/>white:no, red:yes
                                    </Tooltip>
                                }>
                                <span>
                                  <span  style={{color: this.overmatchColor(EnemyShip, "a")}}>{'    '}-atk:</span>
                                  <span style={{color: this.findAttackAngle(EnemyShip, 5).color}}>{this.findAttackAngle(EnemyShip, 5).angle}˚</span>
                                  <span style={{color: this.findAttackAngle(EnemyShip, 10).color}}>{' '}{this.findAttackAngle(EnemyShip, 10).angle}˚</span>
                                  <span style={{color: this.findAttackAngle(EnemyShip, 15).color}}>{' '}{this.findAttackAngle(EnemyShip, 15).angle}˚</span>
                                </span>
                                </OverlayTrigger>
                                <OverlayTrigger
                                  placement="right"
                                  overlay={
                                    <Tooltip id="tooltip">
                                      enemy overmatch your bow?<br/>white:no, red:yes
                                    </Tooltip>
                                }>
                                <span>
                                  <span  style={{color: this.overmatchColor(EnemyShip, "d")}}>{'    '}-def:</span>
                                  <span style={{color: this.findDefendAngle(EnemyShip, 5).color}}>{this.findDefendAngle(EnemyShip, 5).angle}˚</span>
                                  <span style={{color: this.findDefendAngle(EnemyShip, 10).color}}>{' '}{this.findDefendAngle(EnemyShip, 10).angle}˚</span>
                                  <span style={{color: this.findDefendAngle(EnemyShip, 15).color}}>{' '}{this.findDefendAngle(EnemyShip, 15).angle}˚</span>
                                </span>
                                </OverlayTrigger>
                              </ListGroupItem>
                            )
                          }
                        })
                      }
                      <ListGroupItem>-!!order ships by recent popularity!!-Shimakaze</ListGroupItem>
                      <ListGroupItem>-a note about why in catagory-Gearing</ListGroupItem>
                      <ListGroupItem>-Z-52</ListGroupItem>
                      <ListGroupItem>-give cit over pen distance (if you can)-Khabarovsk</ListGroupItem>
                      <ListGroupItem>Grozovoi</ListGroupItem>
                      <ListGroupItem>-make selectable to remove matched ships-Yueyang</ListGroupItem>
                    </ListGroup>
                  </td>
                  <td>
                    <ListGroup>
                      {
                        this.state.ships.map((EnemyShip, idx) => {
                          if (EnemyShip.class === "CL") {
                            return (
                              <ListGroupItem
                                key={idx}
                                header={
                                  <h3>
                                    <OverlayTrigger
                                      placement="left"
                                      overlay={
                                        <Tooltip id="tooltip">
                                          can you HE pen?<br/>black:nothing,<br/>white:super,<br/>yellow:super/bow, orange:super/bow/deck/upper,
                                          red:can cit
                                        </Tooltip>
                                    }>
                                      <u style={{color: this.getColor(EnemyShip)}}>
                                        {EnemyShip.name}
                                      </u>
                                    </OverlayTrigger>{'  '}
                                    <OverlayTrigger
                                      placement="right"
                                      overlay={
                                        <Tooltip id="tooltip">
                                          can enemy HE pen?<br/>black:nothing,<br/>white:super,<br/>yellow:super/bow, orange:super/bow/deck/upper,
                                          red:can cit
                                        </Tooltip>
                                    }>
                                      <u style={{color: this.getDefColor(EnemyShip)}}>
                                        {EnemyShip.tier}
                                      </u>
                                    </OverlayTrigger>
                                  </h3>
                                }>
                                <OverlayTrigger
                                  placement="left"
                                  overlay={
                                    <Tooltip id="tooltip">
                                      you overmatch enemy bow?<br/>white:no, red:yes
                                    </Tooltip>
                                }>
                                  <span>
                                    <span  style={{color: this.overmatchColor(EnemyShip, "a")}}>{'    '}-atk:</span>
                                    <span style={{color: this.findAttackAngle(EnemyShip, 5).color}}>{this.findAttackAngle(EnemyShip, 5).angle}˚</span>
                                    <span style={{color: this.findAttackAngle(EnemyShip, 10).color}}>{' '}{this.findAttackAngle(EnemyShip, 10).angle}˚</span>
                                    <span style={{color: this.findAttackAngle(EnemyShip, 15).color}}>{' '}{this.findAttackAngle(EnemyShip, 15).angle}˚</span>
                                  </span>
                                </OverlayTrigger>
                                <OverlayTrigger
                                  placement="right"
                                  overlay={
                                    <Tooltip id="tooltip">
                                      enemy overmatch your bow?<br/>white:no, red:yes
                                    </Tooltip>
                                }>
                                  <span>
                                    <span  style={{color: this.overmatchColor(EnemyShip, "d")}}>{'    '}-def:</span>
                                    <span style={{color: this.findDefendAngle(EnemyShip, 5).color}}>{this.findDefendAngle(EnemyShip, 5).angle}˚</span>
                                    <span style={{color: this.findDefendAngle(EnemyShip, 10).color}}>{' '}{this.findDefendAngle(EnemyShip, 10).angle}˚</span>
                                    <span style={{color: this.findDefendAngle(EnemyShip, 15).color}}>{' '}{this.findDefendAngle(EnemyShip, 15).angle}˚</span>
                                  </span>
                                </OverlayTrigger>
                              </ListGroupItem>
                            )
                          }
                        })
                      }
                    </ListGroup>
                  </td>
                  <td>
                    <ListGroup>
                      {
                        this.state.ships.map((EnemyShip, idx) => {
                          if (EnemyShip.class === "BB") {
                            return (
                              <ListGroupItem
                                key={idx+.2}
                                header={
                                  <h3>
                                    <OverlayTrigger
                                      placement="left"
                                      overlay={
                                        <Tooltip id="tooltip">
                                          can you HE pen?<br/>black:nothing,<br/>white:super,<br/>yellow:super/bow, orange:super/bow/deck/upper,
                                          red:can cit
                                        </Tooltip>
                                    }>
                                      <u style={{color: this.getColor(EnemyShip)}}>
                                        {EnemyShip.name}
                                      </u>
                                    </OverlayTrigger>{'  '}
                                    <OverlayTrigger
                                      placement="right"
                                      overlay={
                                        <Tooltip id="tooltip">
                                          can enemy HE pen?<br/>black:nothing,<br/>white:super,<br/>yellow:super/bow, orange:super/bow/deck/upper,
                                          red:can cit
                                        </Tooltip>
                                    }>
                                      <u style={{color: this.getDefColor(EnemyShip)}}>
                                        {EnemyShip.tier}
                                      </u>
                                    </OverlayTrigger>
                                  </h3>
                                }>
                                <OverlayTrigger
                                  placement="left"
                                  overlay={
                                    <Tooltip id="tooltip">
                                      you overmatch enemy bow?<br/>white:no, red:yes
                                    </Tooltip>
                                }>

                                  <span>
                                    <span  style={{color: this.overmatchColor(EnemyShip, "a")}}>{'    '}-atk:</span>
                                    <span style={{color: this.findAttackAngle(EnemyShip, 5).color}}>{this.findAttackAngle(EnemyShip, 5).angle}˚</span>
                                    <span style={{color: this.findAttackAngle(EnemyShip, 10).color}}>{' '}{this.findAttackAngle(EnemyShip, 10).angle}˚</span>
                                    <span style={{color: this.findAttackAngle(EnemyShip, 15).color}}>{' '}{this.findAttackAngle(EnemyShip, 15).angle}˚</span>
                                  </span>
                                </OverlayTrigger>
                                <OverlayTrigger
                                  placement="right"
                                  overlay={
                                    <Tooltip id="tooltip">
                                      enemy overmatch your bow?<br/>white:no, red:yes
                                    </Tooltip>
                                }>
                                <span>
                                  <span  style={{color: this.overmatchColor(EnemyShip, "d")}}>{'    '}-def:</span>
                                  <span style={{color: this.findDefendAngle(EnemyShip, 5).color}}>{this.findDefendAngle(EnemyShip, 5).angle}˚</span>
                                  <span style={{color: this.findDefendAngle(EnemyShip, 10).color}}>{' '}{this.findDefendAngle(EnemyShip, 10).angle}˚</span>
                                  <span style={{color: this.findDefendAngle(EnemyShip, 15).color}}>{' '}{this.findDefendAngle(EnemyShip, 15).angle}˚</span>
                                </span>
                                </OverlayTrigger>
                              </ListGroupItem>
                            )
                          }
                        })
                      }
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
