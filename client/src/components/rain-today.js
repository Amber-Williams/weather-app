import React, { Component } from 'react';
import GetCoordinates from './get-coordinates';

class RainToday extends Component {

  testAPI(){
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_WEATHER_API_KEY}/37.8267,-122.4233`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Issue fetching weather api...may be due to cors-anywhere no longer in service or api key expiration...ERROR IS:' + error));
  }

  componentDidMount() {
    this.testAPI();
  }

  render() {
    return (
      <div>
        RainToday here
        <GetCoordinates/>
      </div>
    )
  }
}

export default RainToday;


