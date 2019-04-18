import React from 'react'
import './Nav.css'
const opaqueLogo = require('../images/opaquelogo.png')

const Nav = props => {
  return (
    <nav
      id="mainNav"
      style={(props.scrollY>props.sizeY-80)?{
        top:"0",
        marginTop:"0",
        position:"fixed"
      }:null}
    >
      <ul>
        <img
          id="opaquelogo"
          src={opaqueLogo}
        />
        <li><a href="">omakase</a></li>
        <li><a href="">about us</a></li>
        <li><a href="">contact</a></li>
        <li><a href="">locations</a></li>
        <li><a href="">press</a></li>
        {/* <li><button><a href="">book</a></button></li> */}
      </ul>
    </nav>
  )
}

export default Nav

