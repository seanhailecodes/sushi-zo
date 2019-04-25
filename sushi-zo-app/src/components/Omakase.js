import React from 'react'
import '../components/Omakase.css'

const Omakase = props => {
  return (
    <div className="omakase" id="omakaseJump">
      <div id="omakaseText">
        <div
          id="omakaseTextActual"
          style={
            {marginTop:`${props.scrollY/4-100}px`,
            opacity:`${(1400-Math.abs(1250-props.scrollY*1.4))/800-0.6}`
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
          id="omakasePhotoContainer"
          style={
            {
              marginTop:`-${props.scrollY/6-300}px`,
              opacity:`${(1400-Math.abs(1250-props.scrollY*1.4))/800-0.6}`
            }
          }
        >
          <img
              id="omakasePhoto" alt=""
              src={require('../images/Omekase Image.jpg')}
            />
        </div>
      </div>
    </div>
  )
}

export default Omakase

