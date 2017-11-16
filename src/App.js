import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Label from "./components/Label";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Label labelFor={"2"} label={"test"} className={"info"} />
        </p>
      </div>
    );
  }
}

export default App;
