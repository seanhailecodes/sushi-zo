import React from 'react'
import './HeaderStyleSheet.css'

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
