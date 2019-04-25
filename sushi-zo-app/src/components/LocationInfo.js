import React from 'react'

const LocationInfo = props => {
  return (
    <div className="location-info">
      {props.location === 'New York' && (
        <div className="ny-info">
          <div className="nym-info rest-info">
            <img src={require('../images/Midtown.jpeg')} />
            <h4>Midtown</h4>
            <div className="city-info">
              <p>
                 <span className="bold">Address</span> <br />
                 127 E39th Street New York, NY 10016 <br /><br />
                 <span className="bold">Contact Information</span> <br />
                 917-265-8054
              </p>
              <p>
                 <span className="bold">Hours of Operation</span> <br />
                 <span className="under">Mon-Fri</span> <br />
                 6:00PM & 8:30PM <br />
                 Sushi Bar Seating by Reservations Only
              </p>
            </div>
          </div>
          <div className="nyw-info rest-info">
            <img src={require('../images/New York West 3rd.jpeg')} />
            <h4>New York West</h4>
            <div className="city-info">
              <p>
                 <span className="bold">Address</span> <br />
                 88 W. 3rd St., New York, NY 10012 <br /><br />
                 <span className="bold">Contact Information</span> <br />
                 646-405-4826
              </p>
              <p>
                 <span className="bold">Hours of Operation</span> <br />
                 <span className="under">Tue-Sat</span> <br />
                 6:00PM & 8:30PM <br />
                 Sushi Bar Seating by Reservations Only <br /><br />
                 We exclusively offer an omakase course(chef's choice) of $200 per person
              </p>
            </div>
          </div>
        </div>
      )}
      {props.location === 'Los Angeles' && (
        <div className="la-info">
          <div className="lad-info rest-info">
            <img src={require('../images/Downtown LA.jpeg')} />
            <h4>Downtown LA</h4>
            <div className="city-info">
              <p>
                 <span className="bold">Address</span> <br />
                 334 S. Main St., #1106, Los Angeles, CA 90013 <br /><br />
                 <span className="bold">Contact Information</span> <br />
                 424-201-5576
              </p>
              <p>
                 <span className="bold">Hours of Operation</span> <br />
                 <span className="under">Mon-Sat</span> <br />
                 6:00 pm - 9:30 pm
              </p>
            </div>
          </div>
          <div className="law-info rest-info">
            <img src={require('../images/West LA.jpg')} />
            <h4>West LA</h4>
            <div className="city-info">
              <p>
                 <span className="bold">Address</span> <br />
                 9824 National Blvd., #C, Los Angeles, CA 90034 <br /><br />
                 <span className="bold">Contact Information</span> <br />
                 424-201-5576
              </p>
              <p>
                 <span className="bold">Hours of Operation</span> <br />
                 <span className="under">Mon-Fri</span> <br />
                 12:00 pm - 2:00 pm, 6:00 pm - 9:30 pm <br />
                 <span className="under">Sat</span> <br />
                 6:00 pm - 9:30 pm 
              </p>
            </div>
          </div>
        </div>
      )}
      {props.location === 'Tokyo' && (
        <div className="tokyo-info rest-info">
          <img src={require('../images/Tokyo.jpg')} />
          <h4>Tokyo</h4>
          <div className="city-info">
            <p>
               <span className="bold">Address</span> <br />
               7-6-5 Roppongi, Minato-Ku, Tokyo, 106-0032, Japan <br /><br />
               <span className="bold">Contact Information</span> <br />
               +81 3-6804-5135 <br />
               sushizotokyo.com
            </p>
            <p>
               <span className="bold">Hours of Operation</span> <br />
               <span className="under">Mon-Sat</span> <br />
               6:00PM - 11:00PM <br />
               Closed on Sunday and the third Monday
            </p>
          </div>
        </div>
      )}
      {props.location === 'Bangkok' && (
        <div className="bk-info rest-info">
          <img src={require('../images/Bangkok.jpeg')} />
          <h4>Bangkok</h4>
          <div className="city-info">
            <p>
               <span className="bold">Address</span> <br />
               Athenee Tower <br />
               63 Wireless Road, Lumpini, Bangkok, Thailand <br /><br />
               <span className="bold">Contact Information</span> <br />
               +66 2-168-8490 <br /><br />
               Website <br />
               sushibangkok.com
            </p>
            <p>
               <span className="bold">Hours of Operation</span> <br />
               <span className="under">Tues-Sun:</span> <br />
               First Session 5:30pm to 8:00pm <br />
               (please note a strict ending time during the first session) <br />
               Second Session 8:00pm to 10:30pm <br />
               (guests are welcome to stay longer during the second session)
            </p>
          </div>
        </div>
      )}
      {props.location === 'Hong Kong' && (
        <div className="hk-info rest-info">
          <img src={require('../images/Hong Kong.jpeg')} />
          <h4>Hong Kong</h4>
          <div className="city-info">
            <p>
               <span className="bold">Address</span> <br />
               Block 01, Tai Kwun, 10 Hollywood Rd, Central, Hong Kong <br /><br />
               <span className="bold">Contact Information</span> <br />
               +81 3-6804-5135
            </p>
            <p>
              <span style={{color: '#990000'}}>&#8226; COMING SOON</span>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default LocationInfo

