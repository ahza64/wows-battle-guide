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
        <Link to='/'>
          <Button
            type='button'
            onClick={ console.log("dashboard button clicked") }
          >
            Dashboard
          </Button>
        </Link>
        World of Warships Battle Guide Details component, frontend routing functional
      </div>
    )
  }
}
