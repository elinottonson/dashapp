import React, { Component } from 'react'
import Switch from "react-switch";

class Cap extends Component {
  constructor(props) {
    super(props);
    var checked = this.props.handler([], 2).cap
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(cap) {
    this.props.handler([], 2).cap = !this.props.handler([], 2).cap
    this.checked = this.props.handler([], 2).cap
    this.forceUpdate();
    console.log(this.props.handler([], 2).cap)
  }

  render() {
    return (
      <label>
           <span>Decapitilize Tokens</span>
            <Switch onChange={this.handleChange} checked={this.checked} />
        </label>

    );
  }
}

export default Cap;