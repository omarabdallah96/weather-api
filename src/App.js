import React, { Component } from "react";
import Search from "./components/Search";
import storm from "./img/weather-icons/storm.svg";
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

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
        <img src={storm}  className="img" alt="storm icon" />
        </div>
      </div>
    );
  }
}

export default App;