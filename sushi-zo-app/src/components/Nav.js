import React from 'react'
import './Nav.css'
const opaqueLogo = require('../images/opaquelogo.png')
const logoTop = require('../images/logoTop.png')
const logoMid = require('../images/logoMid.png')
const logoDown = require('../images/logoDown.png')

const Nav = props => {
  const ratio = props.scrollY/props.sizeY>=0.915;
  console.log((props.scrollY+(225-(props.sizeY*0.08)))/props.sizeY);
  return (
    <div>
      <div
        style={
          (props.scrollY/props.sizeY>0.45?{
            opacity:"0"
          }:(null))}
          id="mainLogo"    
      >
        <img
          id="logoTop"
          src={logoTop}
        />
        <img
          id="logoMid"
          src={logoMid}
        />
        <img
          id="logoDown"
          src={logoDown}
        />
      </div>
      <nav
        id="mainNav"
        style={(props.scrollY>props.sizeY-65)?{
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
          <li><a href="#omakaseMain">omakase</a></li>
          <li><a href="#aboutUs">about us</a></li>
          <li><a href="#contactUs">contact</a></li>
          <li><a href="#locationNav">locations</a></li>
          <li><a href="#press">press</a></li>
          {/* <li><button><a href="">book</a></button></li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Nav

