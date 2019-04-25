import React from 'react'
import '../components/Food.css'

const Food = props => {
    // charles magic console.log((1400-Math.abs(900-props.scrollY*1.2))/1000-0.2)
  return (
    <div className='sushi' id='sushiMain'>
        <div id='sushiText'>
            <div style={
            {marginTop:`${props.scrollY/4-100}px`,
            opacity:`${(1400-Math.abs(1250-props.scrollY*1.4))/800-0.6}`
            }
          }
        >
               </div>
                <div id='positionText'>
                 <p classname='text'>
                <br/>
                Sushi Zo only selects the highest quality and freshest natural ingredients, from our trusted local and worldwide sources.
                </p>
                </div>
            </div>
        <div
        id='sushiFigure'
        > 
            {/* <div
                style={
                    {
                       chalres magic here
                 
                    }
                }
                > */}
                <img
                id="sushiPhoto" alt="" src={require('../images/sushi1.jpeg')}
                />
                </div>
            </div>
        // </div>
  )
}

export default Food