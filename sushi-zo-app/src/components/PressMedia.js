import React, { Component } from 'react'

const PressMedia = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p className="mediaText"
            >{props.text}</p>
            <a className="mediaText"
               href={props.url}>{props.link}</a>
        </div>
    )
  }
  
export default PressMedia