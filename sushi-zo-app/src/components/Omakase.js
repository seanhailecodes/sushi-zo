import React from 'react'
import './Omakase.css'

const Omakase = props => {
  console.log((1400-Math.abs(900-props.scrollY*1.2))/1000-0.2)
  return (
    <div className="omakase">
      <div id="omakaseText">
        <div
          style={
            {marginTop:`${props.scrollY/4-100}px`,
            opacity:`${(1400-Math.abs(1080-props.scrollY*1.2))/850-0.55}`
            }
          }
        >
          <h1 className="title">o<span>&#183;</span>ma<span>&#183;</span>ka<span>&#183;</span>se</h1>
          <p class="italics">I'll leave it up to you</p>
            <p className="text">
              <br/>
              At Sushi Zo we offer an "Omakase" multi-course tasting menu designed to allow you to experience the essence of traditional sushi. Our talented Chefs will prepare innocative and surprising selection of dishes, meant to delight you.
            </p>
        </div>
      </div>
      <div
        id="omakaseFigure"
      >
        <div
          style={
            {
              marginTop:`-${props.scrollY/6-300}px`,
              opacity:`${(1400-Math.abs(1080-props.scrollY*1.2))/850-0.55}`
            }
          }
        >
          <img
              id="omakasePhoto"
              src={require('../images/Omekase Image.jpg')}
            />
        </div>
      </div>
    </div>
  )
}

export default Omakase

