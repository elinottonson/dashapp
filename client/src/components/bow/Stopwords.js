import React, { Component } from 'react'
import Switch from "react-switch";

class Stopwords extends Component {
  constructor(props) {
    super(props);
    var checked = this.props.handler([], 2).stop
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(stop) {
    this.props.handler([], 2).stop = !this.props.handler([], 2).stop
    this.checked = this.props.handler([], 2).stop
    this.forceUpdate();
    console.log(this.props.handler([], 2).stop)
  }

  render() {
    return (
      <label>
           <span>Remove Stopwords</span>
            <Switch onChange={this.handleChange} checked={this.checked} />
        </label>

    );
  }
}

export default Stopwords;