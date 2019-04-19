import React, { Component } from 'react'

import LocationNav from './LocationNav'
import LocationInfo from './LocationInfo'

import './Locations.css'

class Locations extends Component {
  state = {
    location: 'New York'
  }

  changeLocation = event => {
    this.setState({location: event.target.textContent})
  }

  render() {
    return (
<<<<<<< Updated upstream
      <div className="locations">
        <div className="location-text">
          <h2>LOCATIONS</h2>
          <LocationNav changeLocation={this.changeLocation} location={this.state.location}/>
        </div>
=======
      <div className="locations" id="locationJump">
        <h2>LOCATIONS</h2>
        <LocationNav changeLocation={this.changeLocation} location={this.state.location}/>
>>>>>>> Stashed changes
        <LocationInfo location={this.state.location} />
      </div>
    )
  }
}

export default Locations

