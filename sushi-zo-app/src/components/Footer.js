import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div id="contactUs">
        <h2>CONTACT US</h2>
        <div className="contact-info">
          <div className="contact-city">
            <h3>New York</h3>
            <p>Sushi Zo NoHo <br /> 646-405-4826 <br /> zony@sushizo.us</p>
            <p>Sushi Zo Hanare <br /> (Midtown) <br /> 917-265-8054 <br /> hanara@sushizo.us</p>
          </div>
          <div className="contact-city">
            <h3>Los Angeles</h3>
            <p>Sushi Zo West LA <br /> 424-201-5576 <br /> zowla@sushizo.us</p>
            <p>Sushi Zo Downtown LA <br /> 424-201-5576 <br /> zodt@sushizo.us</p>
          </div>
          <div className="contact-city">
            <h3>Tokyo</h3>
            <p>Sushi Zo Tokyo <br /> +81 3-6804-5135 <br /> zotokyo@sushizo.us <br /> sushizotokyo.com</p>
          </div>
          <div className="contact-city">
            <h3>Bangkok</h3>
            <p>Sushi Zo Bangkok <br /> +66 2-168-8490 <br /> zobkk@sushizo.us <br /> sushizobangkok.com</p>
          </div>
          <div className="contact-city">
            <h3>Hong Kong</h3>
            <p>Sushi Zo Hong Kong <br /> +852-2884-0114 <br /> management@sushizo.us</p>
          </div>
        </div>
        <p className="copyright">&copy;2019 Zo Corporation. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

