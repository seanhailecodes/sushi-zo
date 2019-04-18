import React, { Component } from 'react'

const PressMedia = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <a href="#">{props.link}</a>
        </div>
    )
  }
  
export default PressMedia