import React from 'react'

const LocationNav = props => {
  return (
    <nav>
      <ul>
        <li><h3 onClick={props.changeLocation} className={props.location === 'New York' ? 'red-under' : null}>New York</h3></li>
        <li><h3 onClick={props.changeLocation} className={props.location === 'Los Angeles' ? 'red-under' : null}>Los Angeles</h3></li>
        <li><h3 onClick={props.changeLocation} className={props.location === 'Tokyo' ? 'red-under' : null}>Tokyo</h3></li>
        <li><h3 onClick={props.changeLocation} className={props.location === 'Bangkok' ? 'red-under' : null}>Bangkok</h3></li>
        <li><h3 onClick={props.changeLocation} className={props.location === 'Hong Kong' ? 'red-under' : null}>Hong Kong</h3></li>
      </ul>
    </nav>
  )
}

export default LocationNav
