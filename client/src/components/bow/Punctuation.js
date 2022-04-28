import React, { Component } from 'react'
import Switch from "react-switch";

class Punctuation extends Component {
  constructor(props) {
    super(props);
    var checked = this.props.handler([], 2).punct
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(punct) {
    this.props.handler([], 2).punct = !this.props.handler([], 2).punct
    this.checked = this.props.handler([], 2).punct
    this.forceUpdate();
  }

  render() {
    return (
      <label>
           <span>Remove Punctuation</span>
            <Switch onChange={this.handleChange} checked={this.checked} />
        </label>

    );
  }
}

export default Punctuation;