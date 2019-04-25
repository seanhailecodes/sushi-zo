import React from 'react'
import './Nav.css'
const opaqueLogo = require('../images/opaquelogo.png')
const downArrow = require('../images/down-arrow.png')
const logoTop = require('../images/logoTop.png')
const logoMid = require('../images/logoMid.png')
const logoDown = require('../images/logoDown.png')

const Nav = props => {
  const ratio = props.scrollY/props.sizeY>=0.915;
  // console.log((props.scrollY+(225-(props.sizeY*0.08)))/props.sizeY);
  return (
    <div>
      <div
        style={
          (props.scrollY/props.sizeY>0.45?{
            opacity:0
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
          position:"fixed",
          width:`${props.sizeX}px`
        }:{
          width:`${props.sizeX}px`
        }}
      >
        <ul>
          <li><a href="#omakaseJump">omakase</a></li>
          <li><a href="#aboutUsJump">about us</a></li>
          <li><a href="#locationJump">locations</a></li>
          {(props.scrollY/props.sizeY>0.45)?(<a href="#homeJump">
            <img
              id="opaquelogo"
              src={opaqueLogo}
              style={(props.scrollY/props.sizeY>0.55)?{
                opacity: 1
              }:{
                opacity: 0
              }}
            />
            </a>):(
            <div
              id="downArrowContainer"
            >
              <img
                id="downArrow"
                src={downArrow}
                style={(props.scrollY/props.sizeY>0.35)?{
                  opacity: 0
                }:{
                  opacity: 0.5
                }}
              />
            </div>
          )}
          <li><a href="#pressJump">press</a></li>
          <li><a href="#contactUsJump">contact</a></li>
          <li><a href="">reservation</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav

