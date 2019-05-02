import React, { Component } from 'react'
import './NavStyleSheet.css'
const opaqueLogo = require('../images/opaquelogo.png')
const downArrow = require('../images/down-arrow.png')
const logoTop = require('../images/logoTop.png')
const logoMid = require('../images/logoMid.png')
const logoDown = require('../images/logoDown.png')

class Nav extends Component{
  constructor(props){
    super(props)
    this.state={
      reservation: false
    }
  }
  render(){
    return (
      <div>
        <div
          style={
            (this.props.scrollY/this.props.sizeY>0.45?{
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
          style={(this.props.scrollY>this.props.sizeY-65)?{
            top:"0",
            marginTop:"0",
            position:"fixed",
            width:`${this.props.sizeX}px`
          }:{
            width:`${this.props.sizeX}px`
          }}
        >
          {this.state.reservation?(
          <ul>
            <li><a
              class="reservationLoc"
              href="https://resy.com/cities/ny/sushi-zo"
            >nyc|midtown</a></li>
            <li><a
              class="reservationLoc"
              href="https://resy.com/cities/ny/sushizo-hanare"
            >nyc|west</a></li>
            <li><a
              class="reservationLoc"
              href="https://www.seatme.yelp.com/restaurants/18a9d7fa-4400-4f43-a074-2be1c3375201/"
            >la|downtown</a></li>
            <li><a
              class="reservationLoc"
              href="https://www.seatme.yelp.com/restaurants/042e38fc-ac72-477f-ac70-a3905e1e9cdd/"
            >la|west</a></li>
            <li><a
              class="reservationLoc"
              href="https://www.sushizotokyo.com/reservations/"
            >tokyo</a></li>
            <li><a
              href="https://sushizobangkok.com/#reservations"
              class="reservationLoc"
            >Bangkok</a></li>
            {/* <li><a
              class="reservationLoc"
            >Hongkong</a></li> */}
            <li><a
              id="reservationReservation"
              class="navLoc"
              onClick={()=>{
                this.setState(prevState=>{
                  return {
                  reservation: !prevState.reservation
                  }
                })
              }}
            >book</a></li>
          </ul>
          ):(
          <ul>
            <li><a 
            class="navLoc"
            href="#omakaseJump">omakase</a></li>
            <li><a 
            class="navLoc"
            href="#aboutUsJump">about us</a></li>
            <li><a 
            class="navLoc"
            href="#locationJump">locations</a></li>
            {(this.props.scrollY/this.props.sizeY>0.45)?(<a href="#homeJump">
              <img
                id="opaquelogo"
                src={opaqueLogo}
                style={(this.props.scrollY/this.props.sizeY>0.50)?{
                  opacity: 1
                }:{
                  opacity: 0
                }}
              />
              </a>):(
              <a
                id="downArrowContainer"
                href="#omakaseJump"
              >
                <img
                  id="downArrow"
                  src={downArrow}
                  style={(this.props.scrollY/this.props.sizeY>0.40)?{
                    opacity: 0
                  }:{
                    opacity: 0.7
                  }}
                />
              </a>
            )}
            <li><a 
            class="navLoc"
            href="#pressJump">press</a></li>
            <li><a 
            class="navLoc"
            href="#contactUsJump">contact</a></li>
            <li><a
            id="resLoc"
            class="navLoc"
              onClick={()=>{
                this.setState(prevState=>{
                  return {
                  reservation: !prevState.reservation
                  }
                })
              }}
            >book</a></li>
          </ul>
          )}
        </nav>
      </div>
    )
  }
}

export default Nav

