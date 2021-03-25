import React, { Component } from "react";
import Search from "./components/Search";
import Fetch from "./Fetchdata.js"
import "./App.css";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "omar and mariam"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <div className="app__header">
          <Search handleInput={this.handleInputChange} />
        </div>
        <div className="app__main">
          <Fetch/>
        </div>
      </div>
    );
  }
}

export default App;
