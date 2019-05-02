import React, { Component } from 'react'

import LocationNav from './LocationNav'
import LocationInfo from './LocationInfo'

import './LocationsStyleSheet.css'

class Locations extends Component {
  constructor(props){
    super(props)
    this.state ={
      location: 'New York'
    }
    this.showPosition=this.showPosition.bind(this);
    this.changeLocation=this.changeLocation.bind(this);
  }

  changeLocation = event => {
    this.setState({location: event.target.textContent})
  }

  showPosition(position) {
    let currLat = position.coords.latitude;
    let currLong = position.coords.longitude;
    let distances = [
      {
        location:'Los Angeles',
        distance: Math.abs(34.031136-currLat)+ Math.abs(-118.400691-currLong)
      },
      {
        location:'Los Angeles',
        distance: Math.abs(34.048185-currLat)+ Math.abs(-118.246780-currLong)
      },
      {
        location: 'New York',
        distance: Math.abs(40.729822-currLat)+ Math.abs(-73.999142-currLong)
      },
      {
        location:'New York',
        distance: Math.abs(40.749735-currLat)+ Math.abs(-73.977594-currLong)
      },
      {
        location: 'Tokyo',
        distance: Math.abs(35.664496-currLat)+ Math.abs(139.728615-currLong)
      },
      {
        location:'Bangkok',
        distance: Math.abs(13.741168-currLat)+ Math.abs(100.547774-currLong)
      }
    ]
    distances.sort(function(a, b){
      return a.distance-b.distance
    })
    this.setState({
      location: distances[0].location
    });
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  componentDidMount(){
    this.getLocation();
  }
  render() {
    return (
      <div
        className="locations"
        style={{
          opacity:`${(2400-Math.abs(4800-this.props.scrollY*1.3))/900-0.9}`
        }}
      >
        <h2 id="locationJump">LOCATIONS</h2>
        <LocationNav changeLocation={this.changeLocation} location={this.state.location}/>
        <LocationInfo location={this.state.location} />
      </div>
    )
  }
}

export default Locations

