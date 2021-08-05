import React, { Component } from "react";
import Test from "./features/Test";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateChange: "parentStateChange",
    };
  }

  render() {
    return (
      <div className="App">
        <Test />v
      </div>
    );
  }
}

export default App;
