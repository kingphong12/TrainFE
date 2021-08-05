import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: "constructor",
      stateChange: "",
    };
  }

  getDeriveStateFromProps(props) {
    return (this.setState = {
      ...this.state,
      show: "getDeriveStateFromProps",
      stateChange: this.props.stateChange,
    });

    console.log("show", this.state.show);
  }

  render() {
    return <h1>xuanphong</h1>;
  }
}

export default ClassComponent;
