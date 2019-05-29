import React, { Component } from 'react';
import RainToday from './rain-today';

class WeatherContainer extends Component {
  render() {
    return (
      <div>
        WeatherContainer here
        <RainToday/>
      </div>
    )
  }
}

export default WeatherContainer;