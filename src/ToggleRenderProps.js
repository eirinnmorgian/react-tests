import React, { Component } from 'react'

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
    const { render } = this.props;
    return (
      <div>
        {render({
          // on this side: no logic is output
          // only state, which is accessed thru app side
          on: this.state.on,
          toggle: this.toggle
        })}
      </div>
    );
  }
}