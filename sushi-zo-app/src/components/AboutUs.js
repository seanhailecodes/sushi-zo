import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className="about-us" id="aboutUsJump">
      <img id="aboutUsPhoto" src={require("../images/About Us.png")} alt="About text" />
      <div className="about-us-text">
        <div className="text" id="aboutPart1">
          <h2>ABOUT US</h2>
          <p>Sushi Zo is created "Ittai-ken"-style. Ittai-jan is when the neta (the seafood) and shari (sushi rice) unite in perfect harmony.   This balance is the most important aspect of sushi.</p>
        </div>
        <div className="text" id="aboutPart2">
          <p>Our rice is meticulously cooked, seasoned with a unique blend of vinegars and served at body temperature, to create the perfect  partner to the "neta".</p>
          <p>With many of our sushi selections, we use perfectly matched accompaniment for the particular "neta", which may include our unique  soy sauce, sea, salt and other ingredients.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
