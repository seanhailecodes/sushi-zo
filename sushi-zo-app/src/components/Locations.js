import React, { Component } from 'react'

import LocationNav from './LocationNav'
import LocationInfo from './LocationInfo'

class Locations extends Component {
  render() {
    return (
      <div className="locations">
        <LocationNav />
        <LocationInfo />
      </div>
    )
  }
}

export default Locations

