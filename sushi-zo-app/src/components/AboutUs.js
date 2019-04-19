import React from 'react'

const AboutUs = () => {
  return (
    <div className="about-us" id="aboutUsJump">
      <img id="aboutUsPhoto" src={require("../images/About Us.png")} alt="About text" />
      <div className="about-us-text">
        <div className="about-us-title"><h2>ABOUT US</h2></div>
        <div className="text" id="aboutPart1">
          <p>Sushi Zo is created "Ittai-ken"-style. Ittai-jan is when the neta (the seafood) and shari (sushi rice) unite in perfect harmony.   This balance is the most important aspect of sushi.
          <br />
          <br />
            Our rice is meticulously cooked, seasoned with a unique blend of vinegars
          </p>
        </div>
        <div className="text" id="aboutPart2">
          <p>and served at body temperature, to create the perfect  partner to the "neta".
            <br />
            <br />
            With many of our sushi selections, we use perfectly matched accompaniment for the particular "neta", which may include our unique  soy sauce, sea, salt and other ingredients.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
