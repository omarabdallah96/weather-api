import React, { Component } from "react";
import Search from "./components/Search";
import FakeWeather from "./fakeWeatherData.json";

import "./App.css";

import fog from "./img/weather-icons/fog.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import unknown from "./img/weather-icons/unknown.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";

class Fog extends Component {
  render() {
    return (
      <div>
        <img src={fog} alt="fog icon" />
      </div>
    );
  }
}

class Rain extends Component {
  render() {
    return (
      <div>
        <img src={rain} alt="fog rain" />
      </div>
    );
  }
}

class Snow extends Component {
  render() {
    return (
      <div>
        <img src={snow} alt="snow rain" />
      </div>
    );
  }
}

class Storm extends Component {
  render() {
    return (
      <div>
        <img src={storm} alt="storm rain" />
      </div>
    );
  }
}

class Clear extends Component {
  render() {
    return (
      <div>
        <img src={clear} alt="clear icon" />
      </div>
    );
  }
}

class Cloudy extends Component {
  render() {
    return (
      <div>
        <img src={cloudy} alt="cloudy icon" />
      </div>
    );
  }
}

class Unknown extends Component {
  render() {
    return (
      <div>
        <img src={unknown} alt="unknown icon" />
      </div>
    );
  }
}

class Drizzle extends Component {
  render() {
    return (
      <div>
        <img src={drizzle} alt="drizzle icon" />
      </div>
    );
  }
}

class Mostlycloudy extends Component {
  render() {
    return (
      <div>
        <img src={mostlycloudy} alt="mostlycloudy icon" />
      </div>
    );
  }
}

class Partlycloudy extends Component {
  render() {
    return (
      <div>
        <img src={partlycloudy} alt="partlycloudy icon" />
      </div>
    );
  }
}

class All extends Component {
  render() {
    var i = 4;
    const data = FakeWeather.list[i].main;
    const Cmin = parseInt((data.temp_min - 32) * 5 / 9);
    const Cmax = parseInt((data.temp_max - 32) * 5 / 9);
    let menuItems = [];
    for (var j = i + 1; j <= i + 7; j++) {
      var f;
      if (FakeWeather.list[j].weather[0].main == 'Clouds') { f = <Cloudy /> }
      else if (FakeWeather.list[j].weather[0].main == 'Rain') { f = <Rain /> }
      else if (FakeWeather.list[j].weather[0].main == 'Clear') { f = <Clear /> }
      menuItems.push(
        <div className="later id">
          <h4>{FakeWeather.list[j].dt_txt.substring(10, 16)}</h4>
          {f}
          <h4>{parseInt((FakeWeather.list[j].main.temp - 32) * 5 / 9)}°C</h4>
        </div>
      )
    }

    return (
      <div className="all">

        <div className="now">
          <img src={mostlycloudy} alt="mostlycloudy icon" />
          <p className="p0"> {FakeWeather.list[i].weather[0].description}</p>
          <p className="p1"><span>Temperature </span>{Cmin + "°C to   " + Cmax}°C</p>
          <p className="p2"><span>Humidity  </span>  {data.humidity}% <span>  Pressure  </span>  {data.pressure}</p>
        </div>

        <div className="laters">
          {menuItems}
        </div>

      </div>
    );
  }
}

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
          <All />
        </div>

      </div>
    );
  }
}

export default App;