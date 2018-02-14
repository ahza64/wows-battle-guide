import React from 'react';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/lib/Button';

export default class Details extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div>
          World of Warships Battle Guide "Details" component, frontend navigation
        </div>
        <Link to='/'>
          <Button
            type='button'
            onClick={ console.log("dashboard clicked") }
          >
            Dashboard
          </Button>
        </Link>
      </div>
    )
  }
}
