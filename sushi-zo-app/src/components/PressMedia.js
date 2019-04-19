import React, { Component } from 'react'
import '../components/PressMedia.css'

const PressMedia = (props) => {
    return (
        <div>
            <a className="mediaText" href={props.url}>
            <h3>{props.title}</h3>
            <p className="mediaText">{props.text}</p>
            </a>
        </div>
    )
  }
  
export default PressMedia