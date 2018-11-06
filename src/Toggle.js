import React, { Component } from 'react'
import { Button } from '@blueprintjs/core'

export default class Toggle extends Component {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    console.log(this.state.on)
    return (
      <div>
        {this.state.on && this.props.children}
        <Button
          disabled="true"
          intent="success"
          large="true"
          onClick={this.toggle}>Show/Hide</Button>
      </div>
    );
  }
}