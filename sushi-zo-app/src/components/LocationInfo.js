import React from 'react'

const LocationInfo = props => {
  return (
    <div className="location-info">
      {props.location === 'New York' && (
        <div className="ny-info">
          <div className="nym-info">
            <img src={require('../images/Midtown.jpeg')} />
            <h4>Midtown</h4>
          </div>
          <div className="nyw-info">
            <img src={require('../images/New York West 3rd.jpeg')} />
            <h4>New York West</h4>
          </div>
        </div>
      )}
      {props.location === 'Los Angeles' && (
        <div className="la-info">
          <div className="lad-info">
            <img src={require('../images/Downtown LA.jpeg')} />
            <h4>Downtown LA</h4>
          </div>
          <div className="law-info">
            <img src={require('../images/West LA.jpg')} />
            <h4>West LA</h4>
          </div>
        </div>
      )}
      {props.location === 'Tokyo' && (
        <div className="tokyo-info">
          <img src={require('../images/Tokyo.jpg')} />
          <h4>Tokyo</h4>
        </div>
      )}
      {props.location === 'Bangkok' && (
        <div className="bk-info">
          <img src={require('../images/Bangkok.jpeg')} />
          <h4>Bangkok</h4>
        </div>
      )}
      {props.location === 'Hong Kong' && (
        <div className="hk-info">
          <img src={require('../images/Hong Kong.jpeg')} />
          <h4>Hong Kong</h4>
        </div>
      )}
    </div>
  )
}

export default LocationInfo

