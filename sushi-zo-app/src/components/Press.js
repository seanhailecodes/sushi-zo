import React from 'react'
import PressMedia from './PressMedia'

const Press = props => {
  return (
    <div className="press" id="press">
      <div className="pressHeader"><h1>Press | Media | Awards</h1></div>
        <div className="mediaContainer">
          <PressMedia title={"2018 Michelin"}
                      text={"Sushi Zo NYC have been awarded a Michelin Star."}
                      link={"Link"}
          />
          <PressMedia title={"2016 Michelin"}
                      text={"One year after opening its door in New York, Sushi Zo NYC was awarded its second Michelin star"}
                      link={"Link"}
          />
          <PressMedia title={"2014 September"}
                      text={"A Conversation with Sushi Chef Keizo Seki and Architect Kulapat Yantrasast..."}
                      link={"Link"}
          />
          <PressMedia title={"2013 LOS ANGELES TIMES"}
                      text={"Saturday Section Page because we are that awesome."}
                      link={"Link"}
          />
          <PressMedia title={"LOS | ANGELES MAGAZINE"}
                      text={"TOP 15 SUSHI RESTAURANTS Michelin star."}
                      link={"Link"}
          />
          <PressMedia title={"2012 | LA WEEKLY"}
                      text={"Sushi Zo NYC have been awarded a Michelin Star."}
                      link={"Link"}
          />
          <PressMedia title={"2018 Michelin"}
                      text={"Sushi Zo NYC have been awarded a Michelin Star."}
                      link={"Link"}
          />
          <PressMedia title={"2018 Michelin"}
                      text={"Sushi Zo NYC have been awarded a Michelin Star."}
                      link={"Link"}
          />
          <PressMedia title={"2018 Michelin"}
                      text={"Sushi Zo NYC have been awarded a Michelin Star."}
                      link={"Link"}
          />
        </div>
    </div>
  )
}

export default Press
