import React from 'react'
import './Nav.css'
const opaqueLogo = require('../images/opaquelogo.png')
const mainLogo = require('../images/mainlogo.jpg')

const Nav = props => {
  console.log(props.scrollY/props.sizeY)
  return (
    <div>
      <img
        id="mainLogo"
        src={mainLogo}
        style={
          (props.scrollY/props.sizeY>0.83&&props.scrollY/props.sizeY<0.915?{
            marginTop: `${props.sizeY-props.scrollY-150}px`
          }:(props.scrollY/props.sizeY>=0.915?({
            top:"0"
          }):(null)))
        }
      />
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
    </div>
  )
}

export default Nav

