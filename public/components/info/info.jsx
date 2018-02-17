import React from 'react';

export default class Details extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Purpose of the Guide</h1>
        <h4>Use this guide to determine how best to attack and defend aganst enemy ships, based on the ship you're playing</h4>
        <h4>Keep this open on your phone or browser during battles to quickly get the most pertinent strengths and weakenesses of yourself and your enemy.</h4>
        <h4>Use the details section to get a more indepth look, if the Dashboard isn't giving you enough details</h4>
      </div>
    )
  }
}
