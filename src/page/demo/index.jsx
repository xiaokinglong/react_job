import React, { Component } from 'react';

import './index.less';

import store from "../../store";

class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...store.getState(),
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="demo">{this.state.count}</div>
    )
  }

}


export default Demo;