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
      <div
        className="locations"
        id="locationJump"
        style={{
          opacity:`${(2400-Math.abs(4800-this.props.scrollY*1.3))/900-0.6}`
        }}
      >
        <h2>LOCATIONS</h2>
        <LocationNav changeLocation={this.changeLocation} location={this.state.location}/>
        <LocationInfo location={this.state.location} />
      </div>
    )
  }
}

export default Locations

