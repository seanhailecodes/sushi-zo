import React from 'react'
import './omakase.css'

const Omakase = () => {
  return (
    
    <div className="omakase">
    <div className="header">
      <h1 className="title">o<span>&#183;</span>ma<span>&#183;</span>ka<span>&#183;</span>se</h1>
      <p className="text">
        Omakase directly translates to "I'll leave it up to you". <br/>
        At Sushi Zo we offer an "Omakase" multi-course tasting menu designed to allow you to experience the essence of traditional sushi. Our talented Chefs will prepare innocative and surprising selection of dishes, meant to delight you.
      </p>
      </div>

      <img
          id="omakesePhoto"
          src={require('../images/Omekase Image.png')}
          />
    </div>
  )
}

export default Omakase

