import React from 'react'

const LocationInfo = props => {
  return (
    <div className="location-info">
      {props.location === 'New York' && (
        <div className="ny-info">
          <div className="nym-info">
            <h3>Midtown</h3>
            <img src={require('../images/Midtown.jpeg')} />
          </div>
          <div className="nyw-info">
            <h3>New York West</h3>
            <img src={require('../images/New York West 3rd.jpeg')} />
          </div>
        </div>
      )}
      {props.location === 'Los Angeles' && (
        <div className="la-info">
          <div className="lad-info">
            <h3>Downtown LA</h3>
            <img src={require('../images/Downtown LA.jpeg')} />
          </div>
          <div className="law-info">
            <h3>West LA</h3>
            <img src={require('../images/West LA.jpg')} />
          </div>
        </div>
      )}
      {props.location === 'Tokyo' && (
        <div className="tokyo-info">
          <h3>Tokyo</h3>
          <img src={require('../images/Tokyo.jpg')} />
        </div>
      )}
      {props.location === 'Bangkok' && (
        <div className="bk-info">
          <h3>Bangkok</h3>
          <img src={require('../images/Bangkok.jpeg')} />
        </div>
      )}
      {props.location === 'Hong Kong' && (
        <div className="hk-info">
          <h3>Hong Kong</h3>
          <img src={require('../images/Hong Kong.jpeg')} />
        </div>
      )}
    </div>
  )
}

export default LocationInfo

