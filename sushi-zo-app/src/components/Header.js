import React from 'react'
import './Header.css'

const Header = props => {
  return (
    <header>
      <div 
        id="landingImage"
        style={{
          width:`${props.sizeX}px`,
          height:`${props.sizeY}px`
        }}
        />
    </header>
  )
}

export default Header
