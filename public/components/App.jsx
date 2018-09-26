//This will eventually be for site wide auth and custom alerts
import React from 'react';
import Main from './Main.jsx';

export default class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Main/>
      </div>
    )
  }
}
